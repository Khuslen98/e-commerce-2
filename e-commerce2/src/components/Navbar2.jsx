import { useState } from "react";
import { Person, Heart, Cart } from "react-bootstrap-icons";
import { Route, Router, Routes, Link } from "react-router-dom";
import Login from "./Login";
import React from "react";

function Navbar2(props) {
  const [list, setlist] = useState(false);

  const medkue = props.products.map((el) => {
    console.log("minii el", el);
    return (
      <div>
        <div>
          <img
            src={el.image}
            className="rounded img-fluid"
            alt=""
            style={{ width: "80%" }}
          />
        </div>
        <div>Product name: {el.name}</div>
        <div>Product price: {el.price}</div>
      </div>
    );
  });

  return (
    <div className="d-flex">
      <button className="btn text-white rounded-circle">
        <div className="m-2">
          <Heart className="wishlist-main" onClick={() => setlist(true)} />
          {list ? (
            <div className="wishlist-cat rounded bg-info text-black">
              <h5>Wishlist</h5>
              <div>{medkue}</div>
              <div>{props.wishlist}</div>
              <button
                className="close-button btn bg-warning"
                onClick={() => {
                  console.log("jhsagdj");
                  setlist(false);
                }}
              >
                Close
              </button>
            </div>
          ) : (
            ""
          )}
          <div>{props.wishlist}</div>
        </div>
      </button>
      <button className="btn text-white">
        <Link to={"/login"}>
          <Person /> Sign In
        </Link>
      </button>
      <button className="btn text-white">
        <Cart />
      </button>
    </div>
  );
}
export default Navbar2;
