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

export const increaseItemInCart = (pid) => {
  return {
    type: "INCREASE_ITEM_IN_CART",
    payload: pid,
  };
};

export const decreaseItemInCart = (pid) => {
  return {
    type: "DECREASE_ITEM_IN_CART",
    payload: pid,
  };
};
