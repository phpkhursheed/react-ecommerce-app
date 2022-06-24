import React from "react";
import { useSelector } from "react-redux";

function CartSummary() {
  const products = useSelector((state) => state.Cart.cart);
  const subTotal = products.reduce((accumulator, product) => {
    console.log(accumulator);
    return parseInt(product.price * product.quantity + accumulator);
  }, 0);
  return (
    <div className="col-lg-4">
      <div className="card border-secondary mb-5">
        <div className="card-header bg-secondary border-0">
          <h4 className="font-weight-semi-bold m-0">Cart Summary</h4>
        </div>
        <div className="card-body">
          <div className="d-flex justify-content-between mb-3 pt-1">
            <h6 className="font-weight-medium">Subtotal</h6>
            <h6 className="font-weight-medium">${subTotal}</h6>
          </div>
          <div className="d-flex justify-content-between">
            <h6 className="font-weight-medium">Shipping</h6>
            <h6 className="font-weight-medium">$10</h6>
          </div>
        </div>
        <div className="card-footer border-secondary bg-transparent">
          <div className="d-flex justify-content-between mt-2">
            <h5 className="font-weight-bold">Total</h5>
            <h5 className="font-weight-bold">${subTotal + 10}</h5>
          </div>
          <button className="btn btn-block btn-primary my-3 py-3">
            Proceed To Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartSummary;
