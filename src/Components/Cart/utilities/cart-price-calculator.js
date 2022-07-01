export const cartPriceCalculator = (products) =>
  products.reduce(
    (sum, { product: { price, discount }, quantity }) => {
      return {
        totalPrice: sum.totalPrice + quantity * price,
        discount: sum.discount + (quantity * price * discount) / 100,
      };
    },
    { totalPrice: 0, discount: 0 }
  );
