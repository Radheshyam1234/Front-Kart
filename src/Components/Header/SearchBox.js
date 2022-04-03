import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const autoSuggestion = [
  "Roadster",
  "Men Sweatshirt",
  "Mobile",
  "Jackets",
  "Jeans",
  "Earphone",
  "T-shirt",
  "Hoodies",
  "Watch",
];

export const SearchBox = () => {
  const [searchWord, setSearchWord] = useState("");
  const [data, setdata] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const autoSuggestedKeywords = () => {
      return autoSuggestion
        .map((item) => {
          if (item.toLowerCase().indexOf(searchWord.toLowerCase()) !== -1) {
            return (
              <li
                className="suggestion-item"
                key={item}
                onClick={(e) => {
                  navigate(`/search/${encodeURIComponent(item)}`);
                  setSearchWord("");
                }}
              >
                <b>{item}</b>
              </li>
            );
          }
        })
        .filter((item) => item !== undefined);
    };
    setdata(autoSuggestedKeywords);
  }, [searchWord]);

  const submitSearch = () => {
    if (!searchWord == "") {
      navigate(`/search/:${searchWord}`);
      setSearchWord("");
    }
  };

  function debounceFun(searchHandler, delay) {
    let timerId;
    return function () {
      let self = this;
      let args = arguments;
      clearTimeout(timerId);
      timerId = setTimeout(() => {
        searchHandler.apply(self, args);
      }, delay);
    };
  }

  const searchHandler = (e) => {
    setSearchWord(e.target.value);
  };
  const optimizedSearchHandler = useCallback(
    debounceFun(searchHandler, 500),
    []
  );

  return (
    <>
      <div className="search-form">
        <label
          htmlFor="search-box"
          className="fas fa-search"
          onClick={() => {
            submitSearch();
          }}
        ></label>
        <input
          autoComplete="off"
          type="search"
          id="search-box"
          placeholder="Search for products, brands "
          onChange={optimizedSearchHandler}
          onKeyUp={(e) => {
            if (e.key === "Enter") submitSearch();
          }}
        />
        {searchWord && (
          <ul className="list-style-none search-data-results box-shadow">
            {data}
          </ul>
        )}
      </div>
    </>
  );
};
