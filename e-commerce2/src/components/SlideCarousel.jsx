
import slideCarousel from "../data/slideCarousel";
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";

export default function SlideCarousel() {
    const data1 = slideCarousel.map(element => {
        return (
            <div className="d-flex mx-5 mt-5 SlideCarousel">
                <div className="m-1">
                    <img src={element.image} className="rounded" alt="" style={{width: "16rem", heigth: "16rem"}}/>
                </div>
                <div className="m-3 d-flex  align-items-center SlideCarousel01">
                    <h4>{element.name}</h4>
                    {element.para}
                </div>
               
            </div>
        )
    })

    const renderTitle = () => <h1>hhh</h1>

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };

    return (

        <Carousel
            swipeable={false}
            draggable={false}
            showDots={true}
            ssr={true} 
            infinite={true}
            responsive={responsive}
            autoPlaySpeed={1000}
            keyBoardControl={true}
        >
            {data1}
        </Carousel> 

    )
}
