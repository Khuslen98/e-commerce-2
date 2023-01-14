import { useState } from 'react';
import { Person, Heart, Cart } from 'react-bootstrap-icons';


function Navbar2(props) {
    const [ list, setlist] = useState(false)

    return (
        <div className="d-flex mx-5 mt-5">
            <button className="btn text-white rounded-circle">
                
                <div className="m-2 " >
                    <Heart className='wishlist-main' onClick={() => setlist(true)}/>
                    {list ? <div className='wishlist-cat'>
                            <h5>Wishlist</h5>
                            {props.wishlist}
                            <button className='close-button' onClick={() => { setlist(false) }}>Close</button>
                        </div> : ""}
                    <div>
                        {props.products.map((product) => {
                        //   console.log(product.icon)
                        })}
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