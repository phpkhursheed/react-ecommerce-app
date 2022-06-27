import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CartSummary from "../../atoms/CartSummary";
import {
  deleteToCart,
  increaseItemInCart,
  decreaseItemInCart,
} from "../../../redux/cart/actions";
import "react-notifications/lib/notifications.css";
import Main from "../../pattern/Main";

function Cart() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.Cart.cart);
  //console.log(products);
  const productList = products.map((product, i) => {
    return (
      <>
        <tr key={i}>
          <td className="align-middle">
            <img src={product.image} alt="" style={{ width: "50px" }} />
            {product.title}
          </td>
          <td className="align-middle">${product.price}</td>
          <td className="align-middle">
            <div
              className="input-group quantity mx-auto"
              style={{ width: "100px" }}
            >
              <div className="input-group-btn">
                <button
                  className="btn btn-sm btn-primary btn-minus"
                  data-product={product.id}
                  onClick={() => dispatch(decreaseItemInCart(product.id))}
                >
                  <i className="fa fa-minus"></i>
                </button>
              </div>
              <input
                type="text"
                className="form-control form-control-sm bg-secondary text-center"
                value={product.quantity}
              />
              <div className="input-group-btn">
                <button
                  className="btn btn-sm btn-primary btn-plus"
                  data-product={product.id}
                  onClick={() => dispatch(increaseItemInCart(product.id))}
                >
                  <i className="fa fa-plus"></i>
                </button>
              </div>
            </div>
          </td>
          <td className="align-middle">
            ${(product.price * product.quantity).toFixed(2)}
          </td>
          <td className="align-middle">
            <button
              className="btn btn-sm btn-primary"
              onClick={() => dispatch(deleteToCart(product.id))}
            >
              <i className="fa fa-times"></i>
            </button>
          </td>
        </tr>
      </>
    );
  });
  return (
    <>
      <Main>
        <div className="container-fluid pt-5">
          <div className="row px-xl-5">
            <div className="col-lg-8 table-responsive mb-5">
              <table className="table table-bordered text-center mb-0">
                <thead className="bg-secondary text-dark">
                  <tr>
                    <th>Products</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th>Remove</th>
                  </tr>
                </thead>
                <tbody className="align-middle">{productList}</tbody>
              </table>
            </div>
            <CartSummary />
          </div>
        </div>
      </Main>
    </>
  );
}

export default Cart;
