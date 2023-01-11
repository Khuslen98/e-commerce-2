import CarouselData from "../data/carousel1";
import AliceCarousel from 'react-alice-carousel';

const CarouselData0 = () => {
    const responsive = {
        0 : {items: 1 , itemFit: 'contain'}
    }
    const result = CarouselData.map(data => {

        return (
            <div className="sliderimg Carousel01 d-flex justify-content-around carouselMain m-5">
                <div className="carouselSection1">
                    <h2 className="CarouselDataH2">{data.name}</h2>
                    <button className="CarouselDataBTN1 btn2 ">{data.button}</button>
                    <button className="CarouselDataBTN2 btn2 ">{data.button2}</button>
                </div>
             
                <div className="carouselSection2">
                    <img className="CarouselDataIMG" src={data.image} alt="" />
                    {/* <p className="CarouselDataPARA">{data.para}</p> */}
                </div>
            </div>
        )
    })
    console.log(result)
    return (
        <div>
            <AliceCarousel responsive={responsive} infinite="false" autoPlay autoPlayInterval={3000}>
                {result}
            </AliceCarousel>
        </div>
    )
}



export default CarouselData0