import axios from "axios";

const getAllProducts = () => {
  return (dispatch) => {
    axios.get(`https://fakestoreapi.com/products`).then((res) => {
      const products = res.data;
      dispatch({
        type: "GET_ALL_PRODUCTS",
        payload: products,
      });
    });
  };
};

export default getAllProducts;
