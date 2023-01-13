import navbarData1 from "../data/navBarRow2"
import { Person, Heart, Cart } from 'react-bootstrap-icons';

function Navbar2(props) {

    // const data = navbarData1.map(element => {
    // return (
    // <div className="d-flex mx-5 mt-5">
    //     <div className="m-1">
    //         {element.Image}
    //     </div>
    //     <div className="m-1">
    //         {element.paragraph}
    //     </div>
    // </div>
    // s
    // })
    return (
        <div className="d-flex mx-5 mt-5">
            <button className="btn rounded-circle">
                <div className="m-1">
                    <Heart />
                    <div>
                        {props.wishlist}
                    </div>
                </div>
            </button>
            <div className="m-1">
                <Person />
            </div>
            <div className="m-1">
                <Cart />
            </div>

        </div>
    )

}
export default Navbar2