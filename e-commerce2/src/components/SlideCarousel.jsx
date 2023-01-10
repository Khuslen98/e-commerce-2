import slideCarousel from "../data/slideCarousel";
import Carousel from 'react-multi-carousel';

const SlideCarousel = () => {
    const data = slideCarousel.map(element => {
        return (
            <div className="d-flex mx-5 mt-5">
                <div className="m-1">
                    {element.image}
                </div>
                <div className="m-1">
                    {element.name}
                </div>
                <div className="m-1">
                    {element.para}
                </div>
            </div>
        )
    })
    return (
        <Carousel>
            {data}
        </Carousel>
    )
}
export default SlideCarousel