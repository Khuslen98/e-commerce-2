import { Link, useParams } from "react-router-dom";
import { Person, SuitHeart, Cart, XCircle, X } from "react-bootstrap-icons";
import { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

export default function Navbar(props) {
  const [list, setlist] = useState(false);
  console.log("my wish", props.wishlist);
  const baraa = props.wishlist.map((q) => {
    return (
      <div className="baraanii-sav">
        <div>
          <img
            src={q.image}
            className="rounded img-fluid"
            alt=""
            style={{ width: "60%" }}
          />
        </div>

        <div>{q.name}</div>
        <div>{q.price}</div>
        <a
          onClick={() => {
            props.setWishlist(
              props.wishlist.filter(wish => wish.id !== q.id)
            );
            console.log("remove wishlist");
            console.log(q.id)
          }}
        >
          <XCircle />
        </a>
      </div>
    );
  });

  return (
    <div className="d-flex navbar">
      <div className="d-flex">
        <div className="mx-5 p-2">
          <Link to={"/home"}>
            <div className="m-1">
              <img src="img/logo-1.png" className="" />
            </div>
          </Link>
        </div>
        <div className="mx-5 p-2">
          <form className="input-group">
            <input
              type="text"
              className="form-control rounded-pill"
              placeholder="Search Any Things"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <div className="input-group-append">
              <button type="submit" class="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="d-flex align-items-center">
          <div className="d-flex persona ml-auto p-2">
            <div className="mx-2">
              <Link to="/login">
                <Person />
              </Link>
            </div>
            <div className="mx-2 ">
              <div>
                <div className="favorite" onClick={() => setlist(true)}>
                  <div>
                    <SuitHeart />
                  </div>
                </div>

                {props.wishlist.length}

                {list ? (
                  <div className="wishlist-cat text-black">
                    {list ? (
                      <div className="d-flex wishlist-cat rounded text-black">
                        <div>{baraa}</div>

                        <button
                          className="close-button  btn bg-warning"
                          onClick={() => {
                            setlist(false);
                          }}
                        >
                          Close
                        </button>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className="mx-2">
              <Link to="/cart">
              <Cart />
              </Link>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
