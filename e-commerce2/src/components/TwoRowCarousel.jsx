import twoRowCarousel from "../data/twoRowCarousel";
import React, { useState } from "react";
// import Slider from "react-slick"
import AliceCarousel from 'react-alice-carousel';
import { Rating } from 'react-simple-star-rating'
import { SuitHeart, SuitHeartFill } from 'react-bootstrap-icons';
import { useParams } from "react-router-dom";


const TwoRowCarousel = (props) => {
    const [list, setlist] = useState(false);
    const [liked, setLiked] = useState(false);
    const { id } = useParams();

    let foundProduct = {};
    if(id) {
        foundProduct = twoRowCarousel.filter((product) => {
            if(product.id == id) {
                return product
            }
        })[0];
    }
    if (Object.keys(props).length > 0) {
        foundProduct = props.product;
    }
    const product = foundProduct;


    // console.log("helejbui", props)
    // function handleRegister(id) {
    //     console.log("hiij bui", id)
    //     props.setWishlist(props.wishlist + 1)
    //     const heart = twoRowCarousel.map(element => {
    //         const children = element.children.map(element => {
    //             if (id === element.id) {
    //                 props.setProducts([...props.products, element]);
             
    //             }
    //         })
    //         return (children)
            
            

    //     })
    //     console.log(props.products)
    // };
    const data = twoRowCarousel.map(element => {
        const children = element.children.map(element => {

            return (
                <div className="d-flex w-25 p-4">
                    <div className=" border rounded m-2">
                        <div className="d-flex">
                            <img src={element.image} className="rounded img-fluid" alt="" style={{ width: "80%" }} />
                            {/* <div className="m-2 rounded-circle p-2 bg-warning" style={{width: "44px", height:"37px"}}> */}
                            <a onClick={() => { 
                                console.log("zurh daragdla")
                            }}>
                                {SuitHeart}
                            </a>
                        </div>
                        <div className="d-flex align-items-center justify-content-evenly">
                            <div>
                                <div className="m-1">
                                    <p style={{ color: "#003F62", fontWeight: "bolder" }}>
                                        {element.name}
                                    </p>
                                </div>
                                <div className="d-flex m-1">
                                    <div>
                                        ${element.price}

                                    </div>
                                </div>
                            </div>
                            <div style={{ margin: "0 10px 10px 0" }}>
                                {element.icon2}
                            </div>
                        </div>
                        <div>
                            <Rating />
                        </div>

                    </div>
                </div>
            );
        })
        return (
            <div className="d-flex flex-wrap">
                {children}
            </div>
        )
        const settings = {
            infinite: true,
            centerPadding: "60px",
    
            speed: 1000,
            rows: 2,
            autoplay: true,
    
            dots: true,
            slidesToShow: 4,
            slideToScroll: 4
        };

    })
    return (
        <div>
            <AliceCarousel>
                {data}
            </AliceCarousel>
        </div>
    )
}

export default TwoRowCarousel