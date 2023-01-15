import { useState } from 'react';
import { Person, Heart, Cart } from 'react-bootstrap-icons';


function Navbar2(props) {
    const [list, setlist] = useState(false)

    return (
        <div className="d-flex mx-5 mt-5">
            <button className="btn text-white rounded-circle">

                <div className="m-2 " >
                    <Heart className='wishlist-main' onClick={() => setlist(true)} />
                    {list ? <div className='wishlist-cat text-black'>
                        <h5>Wishlist</h5>
                        <div>
                            {props.products.map((element) => {
                                <div>
                                    <div>
                                        <img src={element.image} className="rounded img-fluid" alt="" style={{ width: "80%" }} />
                                    </div>
                                    <div>
                                        {element.name}
                                    </div>
                                    <div>
                                        {element.price}
                                    </div>
                                </div>
                            })}
                        </div>
                        <div>{props.wishlist}</div>
                        <button className='close-button' onClick={() => { setlist(false) }}>Close</button>
                    </div> : ""}
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