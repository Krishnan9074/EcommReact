import React from "react";

const Home = () => {
  return (
    <>
      <div className="hero border-1 pb-3">
        <div className="card bg-dark text-white border-0 mx-3">
          <img
            className="card-img img-fluid"
            src="https://png.pngtree.com/thumb_back/fh260/background/20230624/pngtree-digital-shopping-made-easy-conceptualizing-online-store-on-laptop-through-3d-image_3668364.jpg"
            alt="Card"
            height={300}
          />
          <div className="card-img-overlay d-flex align-items-center">
            <div className="container">
              <h5 className="card-title fs-1 text fw-lighter">New Season Arrivals</h5>
              <p className="card-text fs-5 d-none d-sm-block ">
                New GENZ ecommerce store with all functionalities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
