import SlideCarousel from "./SlideCarousel";
import TwoRowCarousel from "./TwoRowCarousel";
import TwoRowCarousel0 from "./TwoRowCarousel0";
import CarouselData0 from "./Carousel";
import { Outlet } from "react-router-dom";
import Laptop from "./Laptop";
import ThreeProduct from "./ThreeProduct";
import Warranty from "./Warranty";
import Developer from "./Developer";

export default function Home(props) {
<<<<<<< HEAD
    return (
        <div>
            <CarouselData0 />
            <SlideCarousel />
            <TwoRowCarousel0 />
            {/* <TwoRowCarousel /*setWishlist={setWishlist} wishlist={wishlist} products={products} setProducts={setProducts}*/ /> */}
            <Laptop />
            <ThreeProduct />
            <Warranty/>
            <Developer />
            <Outlet />
            
        </div>
    )
}
=======
  return (
    <div>
      <CarouselData0 />
      <SlideCarousel />
      <TwoRowCarousel0 />
      <TwoRowCarousel />
      <Laptop />
      <ThreeProduct />
      <Warranty />
      <Developer />
      <Outlet />
    </div>
  );
}
>>>>>>> 7269d98ee95b4985d75c6b1aa70f81252499fc77
