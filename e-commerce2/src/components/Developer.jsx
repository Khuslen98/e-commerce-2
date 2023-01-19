import developer from "../data/developer";
import Carousel from 'react-multi-carousel';

export default function Developer() {
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
    const data = developer.map(element => {
        return (
            <div className=" mx-1 mt-5 SlideCarousel DeveloperCarousel p-3" >
                <div className="d-flex">
                    <img src={element.image} className="rounded-circle developerImg" alt="" />
                    <h5 className="d-flex align-items-center m-3">{element.name}</h5>
                </div>
                <div className="developerParaContainer p-2" >
                    <p className="developerPara">{element.para}</p>
                </div>


                

            </div>
        )
    })
    return (
        <div>
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
            {data}
        </Carousel> 
        </div>
    )
}