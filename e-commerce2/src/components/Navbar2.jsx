<<<<<<< HEAD
import { useState } from 'react';
import { Person, Heart, Cart } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom'
import React from 'react';

=======
import { useState } from "react";
import { Person, Heart, Cart } from "react-bootstrap-icons";
import { Route, Router, Routes, Link } from "react-router-dom";
import Login from "./Login";
import React from "react";
>>>>>>> c340f520ee183728b2e2ff1c66395a27f8fcc9c3

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
<<<<<<< HEAD
    <div className="d-flex">
=======
    <div className="d-flex mx-5 mt-5">
>>>>>>> c340f520ee183728b2e2ff1c66395a27f8fcc9c3
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
<<<<<<< HEAD
      <button className="btn text-white">
        <Link to={"/login"}>
          <Person /> Sign In
        </Link>
      </button>
      <button className="btn text-white">
        <Cart />
      </button>
=======
      <div>
        <Link to={"/login"}>
          <Person />
        </Link>
      </div>
      <div className="m-1 p-2">
        <Cart />
      </div>
>>>>>>> c340f520ee183728b2e2ff1c66395a27f8fcc9c3
    </div>
  );
}
export default Navbar2;
