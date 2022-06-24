export const addToCart = ({ title, price, id, image }) => {
  return {
    type: "ADD_TO_CART",
    payload: {
      id: id,
      title,
      price,
      image,
      quantity: 1,
    },
  };
};

export const deleteToCart = (pid) => {
  return {
    type: "DELETE_TO_CART",
    payload: pid,
  };
};
