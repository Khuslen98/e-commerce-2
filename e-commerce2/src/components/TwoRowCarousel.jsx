import twoRowCarousel from "../data/twoRowCarousel";
import React from "react";
// import Slider from "react-slick"
import AliceCarousel from 'react-alice-carousel';
import { Rating } from 'react-simple-star-rating'


const TwoRowCarousel = () => {
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
                    <div className=" border m-2">
                        <div>
                            <img src={element.image} className="rounded" alt="" style={{ width: "10rem", heigth: "10rem" }} />
                            <div>
                                {element.icon}
                            </div>
                        </div>
                        <div>
                            <p>
                                {element.name}
                            </p>
                        </div>
                        <div className="d-flex">
                            <div>
                                ${element.price}
                                <div>
                                    <Rating />
                                </div>
    
                            </div>
                            <div>
                                {element.icon2}
                            </div>
                        </div>
                    </div>
                </div>
            );
        })
        return(
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