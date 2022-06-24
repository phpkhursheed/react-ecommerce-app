import { useSelector } from "react-redux";

const GetTotalInCart = () => {
  const cart = useSelector((state) => state.Cart);
  console.log("Hwllo", cart.cart.length);
  return cart.cart.length;
};

export default GetTotalInCart;
