import {
  createContext,
  useContext,
  useState,
  useReducer,
  useEffect,
} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../../utilities/ApiUrl";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [userProfile, setUserProfile] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    token && setIsUserLoggedIn(true);
  }, []);

  const signupNewUser = async ({ email, password, firstName, lastName }) => {
    try {
      const {
        data: { response },
        status,
      } = await axios({
        method: "POST",
        url: `${API_URL}/users`,
        data: {
          email,
          password,
          firstName,
          lastName,
        },
      });

      if (status == 201) {
        localStorage.setItem("token", JSON.stringify(response.token));
        setIsUserLoggedIn(true);
        setUserProfile(response.NewUser);
        localStorage.setItem("user", JSON.stringify(response.NewUser));
        navigate("/");
      }
    } catch (error) {
      const {
        response: {
          data: { message },
        },
      } = error;
      console.log(message);
    }
  };

  const loginUser = async ({ email, password, from }) => {
    try {
      const {
        data: { response },
        status,
      } = await axios({
        method: "POST",
        url: `${API_URL}/users/authenticate`,
        data: {
          email,
          password,
        },
      });
      if (status == 201) {
        localStorage.setItem("token", response.token);
        setIsUserLoggedIn(true);
        setUserProfile(response?.user);
        localStorage.setItem("user", JSON.stringify(response.user));
        navigate(from, { replace: true });
      }
    } catch (error) {
      const {
        response: {
          data: { message },
        },
      } = error;
      console.log(message);
    }
  };

  const logoutUser = () => {
    localStorage.clear();
    setIsUserLoggedIn(false);
    setUserProfile(null);
    navigate("/login");
  };

  return (
    <AuthContext.Provider
      value={{
        isUserLoggedIn,
        setIsUserLoggedIn,
        userProfile,
        setUserProfile,
        signupNewUser,
        loginUser,
        logoutUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthProvider = () => useContext(AuthContext);
