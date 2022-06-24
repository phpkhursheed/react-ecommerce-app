import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteToCart } from "../../../redux/cart/actions";
import getAllProducts from "../../../redux/product/actions";

function ProductList() {
  const dispatch = useDispatch();

  const addtoCart = (product) => {
    //console.log("AddTOcart", id, title);
    dispatch(addToCart(product));
  };

  const addtoWishList = (pid) => {
    console.log("addtoWishList", pid);
  };

  const productList = useSelector((state) => {
    return state.Products;
  });
  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  const Listing = productList.products.map((product, index) => {
    return (
      <div className="col-lg-4 col-md-6 col-sm-12 pb-1">
        <div className="card product-item border-0 mb-4">
          <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
            <img src={product.image} alt={product.title} />
          </div>
          <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
            <h6 className="text-truncate mb-3">{product.title}</h6>
            <div className="d-flex justify-content-center">
              <h6>$123.00</h6>
              <h6 className="text-muted ml-2">
                <del>$123.00</del>
              </h6>
            </div>
          </div>
          <div className="card-footer d-flex justify-content-between bg-light border">
            <a href="#" className="btn btn-sm text-dark p-0">
              <i className="fas fa-eye text-primary mr-1"></i>View Detail
            </a>
            <a
              href="#"
              className="btn btn-sm text-dark p-0"
              onClick={(e) => {
                e.preventDefault();
                addtoCart(product);
              }}
            >
              <i className="fas fa-shopping-cart text-primary mr-1"></i>Add To
              Cart
            </a>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="container-fluid pt-5">
      <div className="col-lg-12 col-md-12">
        <div className="row">
          {!productList.loadingStatus ? (
            Listing
          ) : (
            <div className="loader"></div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductList;
