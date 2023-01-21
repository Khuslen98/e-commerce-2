import navbarData from "../data/navBarRow1";
import { Link } from "react-router-dom";
import { Person, SuitHeart, Cart } from "react-bootstrap-icons";
import { useState } from "react";

function Navbar1(props) {
  const [liked, setLiked] = useState(false)
  const data = navbarData.map((element) => {
    return (
      <div className="d-flex">
        <div className="d-flex justify-content-center">
          <Link to={"/home"}>
            <div className="m-1">
              <img src={element.imgURL} className="" />
            </div>
          </Link>

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
          <div className="">
            <div className="d-flex">
              <a>
                <Person />
              </a>
              <a>
                <SuitHeart />
              </a>
              <a>
                <Cart />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  });
  return <div>{data}</div>;
}
export default Navbar1;
