import React from "react";
import category1 from "../../../assets/images/cat-1.jpg";

function Category() {
  return (
    <>
      <div className="container-fluid pt-5">
        <div className="row px-xl-5 pb-3">
          <div className="col-lg-4 col-md-6 pb-1">
            <div
              className="cat-item d-flex flex-column border mb-4"
              style={{ padding: "30px" }}
            >
              <p className="text-right">15 Products</p>
              <a
                href="#"
                className="cat-img position-relative overflow-hidden mb-3"
              >
                <img className="img-fluid" src={category1} alt="" />
              </a>
              <h5 className="font-weight-semi-bold m-0">Men's dresses</h5>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 pb-1">
            <div
              className="cat-item d-flex flex-column border mb-4"
              style={{ padding: "30px" }}
            >
              <p className="text-right">15 Products</p>
              <a
                href="#"
                className="cat-img position-relative overflow-hidden mb-3"
              >
                <img className="img-fluid" src={category1} alt="" />
              </a>
              <h5 className="font-weight-semi-bold m-0">Women's dresses</h5>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 pb-1">
            <div
              className="cat-item d-flex flex-column border mb-4"
              style={{ padding: "30px" }}
            >
              <p className="text-right">15 Products</p>
              <a
                href="#"
                className="cat-img position-relative overflow-hidden mb-3"
              >
                <img className="img-fluid" src={category1} alt="" />
              </a>
              <h5 className="font-weight-semi-bold m-0">Baby's dresses</h5>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 pb-1">
            <div
              className="cat-item d-flex flex-column border mb-4"
              style={{ padding: "30px" }}
            >
              <p className="text-right">15 Products</p>
              <a
                href="#"
                className="cat-img position-relative overflow-hidden mb-3"
              >
                <img className="img-fluid" src={category1} alt="" />
              </a>
              <h5 className="font-weight-semi-bold m-0">Accerssories</h5>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 pb-1">
            <div
              className="cat-item d-flex flex-column border mb-4"
              style={{ padding: "30px" }}
            >
              <p className="text-right">15 Products</p>
              <a
                href="#"
                className="cat-img position-relative overflow-hidden mb-3"
              >
                <img className="img-fluid" src={category1} alt="" />
              </a>
              <h5 className="font-weight-semi-bold m-0">Bags</h5>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 pb-1">
            <div
              className="cat-item d-flex flex-column border mb-4"
              style={{ padding: "30px" }}
            >
              <p className="text-right">15 Products</p>
              <a
                href="#"
                className="cat-img position-relative overflow-hidden mb-3"
              >
                <img className="img-fluid" src={category1} alt="" />
              </a>
              <h5 className="font-weight-semi-bold m-0">Shoes</h5>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid offer pt-5">
        <div className="row px-xl-5">
          <div className="col-md-6 pb-4">
            <div className="position-relative bg-secondary text-center text-md-right text-white mb-2 py-5 px-5">
              <img src="img/offer-1.png" alt="" />
              <div className="position-relative">
                <h5 className="text-uppercase text-primary mb-3">
                  20% off the all order
                </h5>
                <h1 className="mb-4 font-weight-semi-bold">
                  Spring Collection
                </h1>
                <a href="#" className="btn btn-outline-primary py-md-2 px-md-3">
                  Shop Now
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 pb-4">
            <div className="position-relative bg-secondary text-center text-md-left text-white mb-2 py-5 px-5">
              <img src="img/offer-2.png" alt="" />
              <div className="position-relative">
                <h5 className="text-uppercase text-primary mb-3">
                  20% off the all order
                </h5>
                <h1 className="mb-4 font-weight-semi-bold">
                  Winter Collection
                </h1>
                <a href="#" className="btn btn-outline-primary py-md-2 px-md-3">
                  Shop Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Category;
