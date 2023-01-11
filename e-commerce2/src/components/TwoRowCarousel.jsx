import twoRowCarousel from "../data/twoRowCarousel";
import React from "react";
import Slider from "react-slick"
import { Rating } from 'react-simple-star-rating'


const TwoRowCarousel = () => {
    const settings = {
        className: "center",
        centerMode: false,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 2,
        speed: 1000,
        rows: 2,
        autoplay: true,
        slidesPerRow: 2,
        dots: true,
    };
    const data = twoRowCarousel.map(element => {
        return (
            <div className="border m-2">
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
                            <Rating/>
<<<<<<< HEAD
                            <Rating/>
=======
>>>>>>> 3895739014cac85379a2f10cfaff2ab70b83767c
                        </div>

                    </div>
                    <div>
                        {element.icon2}
                    </div>
                </div>
            </div>
        );
    })
    return (
        <div>
            <Slider {...settings}>
                {data}
            </Slider>
        </div>
    )
}

export default TwoRowCarousel