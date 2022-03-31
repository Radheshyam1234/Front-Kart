export const cartPriceCalculator = (products) => {
  return products.reduce((totalPrice, item) => {
    return totalPrice + item.quantity * item.product.price;
  }, 0);
};
