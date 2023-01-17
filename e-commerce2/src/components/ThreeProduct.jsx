
import { Rating } from 'react-simple-star-rating'
import { Cart } from 'react-bootstrap-icons';

export default function ThreeProduct() {

    return (
        <div className='d-flex ThreeProd'>
            <div className='ThreeProdSec rounded'>
                <img className="rounded img-fluid" alt="" style={{ width: "80%" }} src="https://images.unsplash.com/photo-1502920917128-1aa500764cbd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80"
                     />
                <p>Canon Camera</p>
                <p>$ 11,70</p>
                <button>add to cart <Cart /> </button>
                <Rating />
            </div>
            <div className='ThreeProdSec rounded'>
                <div >
                    <img className="rounded img-fluid" alt="" style={{ width: "30%" }} src="https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2372&q=80" />
                    <p>Dell LapTop</p>
                    <p>$ 11,70</p>
                    <Rating />
                </div>
                <div>
                    <img className="rounded img-fluid" alt="" style={{ width: "30%" }} src="https://images.unsplash.com/photo-1631896928983-2c94ea6f97e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80" />
                    <p>Xbox ONE</p>
                    <p>$ 11,70</p>
                    <Rating />
                </div>

            </div>
        </div>
    )
}


