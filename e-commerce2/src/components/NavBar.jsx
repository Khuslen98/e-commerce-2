// import { useState } from "react";
// import navbarData from "../data/navBarRow1"
// import { Person, Heart, Cart } from 'react-bootstrap-icons';
// import { Link } from 'react-router-dom'
// import React from 'react';



// function Navbar(props) {

//     function Navbar2(props) {
//         const [list, setlist] = useState(false)

//         const medkue = props.products.map(el => {
//             console.log('minii el', el);
//             return (

//                 <div >
//                     <div>
//                         <img src={el.image} className="rounded img-fluid" alt="" style={{ width: "80%" }} />
//                     </div>
//                     <div>
//                         Product name: {el.name}
//                     </div>
//                     <div>
//                         Product price: {el.price}
//                     </div>
//                 </div>
//             )

//         })

//         const data = navbarData.map(element => {
//             return (
//                 <div>
//                     <div className="d-flex mx-5 my-4 justify-content-center align-items">
//                         <div className="m-1">
//                             <img src={element.imgURL} className="imgLogo1 mx-3 mt-4" />
//                         </div>
//                         <div className="input-group p-3">
//                             <input type="text" className="form-control rounded-pill" placeholder="Search Any Things" aria-label="Recipient's username" aria-describedby="basic-addon2" />
//                             <div className="input-group-append">
//                                 <button class="btn btn-outline-secondary bg-warning p-3 rounded-pill btn-1" type="button">Button</button>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="d-flex mx-5 mt-5">
//                         <button className="btn text-white rounded-circle">

//                             <div className="m-2" >
//                                 <Heart className='wishlist-main' onClick={() => setlist(true)} />
//                                 {
//                                     list ? <div className='wishlist-cat rounded bg-info text-black'>
//                                         <h5>Wishlist</h5>
//                                         <div>
//                                             {medkue}
//                                         </div>
//                                         <div>{props.wishlist}</div>
//                                         <button className='close-button btn bg-warning' onClick={() => { console.log("jhsagdj"); setlist(false) }}>Close</button>
//                                     </div> : ""
//                                 }
//                                 <div>

//                                     {props.wishlist}
//                                 </div>

//                             </div>
//                         </button>
//                         <div>
//                             <Link to={"/login"}><Person /></Link>
//                         </div>
//                         <div className="m-1">
//                             <Cart />
//                         </div>
//                     </div>
//                 </div>

//             )
//         })
//         return (
//             <div>
//                 {data}
//             </div>
//         )
//     }
// }
//     export default Navbar