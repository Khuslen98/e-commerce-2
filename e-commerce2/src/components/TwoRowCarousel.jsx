import twoRowCarousel from "../data/twoRowCarousel";
import React, { useState } from "react";
// import Slider from "react-slick"
import AliceCarousel from 'react-alice-carousel';
import { Rating } from 'react-simple-star-rating'


const TwoRowCarousel = (props) => {
   console.log(props)
    function handleRegister(id) {
        console.log(id)
        props.setWishlist(props.wishlist + 1)
        const heart = twoRowCarousel.map(element => {
            const children = element.children.map(element => {
                if (id === element.id) {
                    props.setProducts([...props.products, element]);
                    // console.log("el",element);
                    // console.log("products", products);
                    // console.log(element.name)
                    // console.log(element.image)
                    // console.log(element.price)
                }
            })
            return (children)
            
        })
        console.log(props.products)
    };


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
    const data = twoRowCarousel.map(element => {
        const children = element.children.map(element => {

            return (
                <div className="d-flex w-25 p-4">
                    <div className=" border rounded m-2">
                        <div className="d-flex">
                            <img src={element.image} className="rounded img-fluid" alt="" style={{ width: "80%" }} />
                            {/* <div className="m-2 rounded-circle p-2 bg-warning" style={{width: "44px", height:"37px"}}> */}
                            <button onClick={() => handleRegister(element.id)} className="btn rounded-circle bg-warning w-25 h-25">
                                {element.icon}
                            </button>
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