import navbarData from "../data/navBarRow1";
import { Link } from "react-router-dom";
import { Person, Heart, Cart } from "react-bootstrap-icons";

function Navbar1() {
  const data = navbarData.map((element) => {
    return (
      <div className="d-flex mx-5 my-4 justify-content-center align-items">
        <Link to={"/home"}>
          <div className="m-1">
            <img src={element.imgURL} className="imgLogo1 mx-3 mt-4" />
          </div>
        </Link>

        <div className="input-group p-3">
          <input
            type="text"
            className="form-control rounded-pill"
            placeholder="Search Any Things"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <div className="input-group-append">
            <button
              class="btn btn-outline-secondary bg-warning p-3 rounded-pill btn-1"
              type="button"
            >
              Button
            </button>
          </div>
          <button className="btn text-white">
            <Link to={"/login"}>
              <Person /> Sign In
            </Link>
          </button>
          <button className="btn text-white">
            <Cart />
          </button>
        </div>
      </div>
    );
  });
  return <div>{data}</div>;
}
export default Navbar1;
