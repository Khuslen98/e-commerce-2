import twoRowCarousel from "../data/twoRowCarousel";
import AliceCarousel from "react-alice-carousel";
import Slider from "react-slick";
import { Rating } from "react-simple-star-rating";
import {
  SuitHeart,
  SuitHeartFill,
  Cart,
  CartCheckFill,
} from "react-bootstrap-icons";

const TwoRowCarousel = (props) => {
  const settings = {
    className: "center",
    centerMode: false,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 4,
    speed: 1000,
    // rows: 2,
    autoplay: true,
    slidesPerRow: 2,
    dots: true,
  };

  const data = twoRowCarousel.map((element, index) => {
    const liked = props.wishlist.filter((wish) => wish.id === element.id)[0];
    console.log(liked)
    const sav = props.cart.filter((sav) => sav.id === element.id[0]);
    console.log(sav);
    return (
      <div key={index} className="d-flex w-25 p-4">
        <div className=" border rounded m-2">
          <div className="d-flex heart">
            <img
              src={element.image}
              className="rounded img-fluid"
              alt=""
              style={{ width: "80%" }}
            />
            <a
              onClick={() => {
                console.log("zurh daragdla");
                // setLiked(!liked);
                if (!liked) {
                  const likedProduct = {
                    id: element.id,
                    image: element.image,
                    name: element.name,
                    price: element.price,
                    liked: true,
                    // product gej ugsun baisan ba el gej uguh ystoi baijee uchir nn childrem dotroo el gesen utgaar hevlej baigaa ym.
                  };
                  console.log("haha", likedProduct);
                  props.setWishlist([...props.wishlist, likedProduct]);
                  
                  // like daragdsan baraag props wishlistruu nemeed ug gesen ug
                } else {
                  props.setWishlist(
                    props.wishlist.filter((w) => w.id === element.id)
                  );
                }
              }}
            >
              {liked ? <SuitHeartFill /> : <SuitHeart />}
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
                <div>${element.price}</div>
              </div>
            </div>
            <a
              style={{ margin: "0 10px 10px 0" }}
              onClick={() => {
                console.log("sav daragdla");
                if(!sav) {
                  const cartedProduct = {
                    id: element.id,
                    image: element.image,
                    name: element.name,
                    price: element.price,
                    liked: true,

                };
                props.setCart([...props.setCart, cartedProduct])
              } else {
                props.setCart(
                  props.cart.filter((l) => l.id === element.id)

                )
                

              }}}
            >
              {sav ? <Cart /> : <CartCheckFill />}
            </a>
          </div>
          <div>
            <Rating />
          </div>
        </div>
      </div>
    );
  });
  return (
    <div>
      <Slider {...settings}>{data}</Slider>
    </div>
  );
};

export default TwoRowCarousel;
