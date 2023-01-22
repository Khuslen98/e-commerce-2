import twoRowCarousel from "../data/twoRowCarousel";
import AliceCarousel from "react-alice-carousel";
import { Rating } from "react-simple-star-rating";
import { SuitHeart, SuitHeartFill } from "react-bootstrap-icons";
import { useState } from "react";
import { useParams } from "react-router-dom";

const TwoRowCarousel = (props) => {
  const [liked, setLiked] = useState(false);
  const settings = {
    infinite: true,
    centerPadding: "60px",

    speed: 1000,
    rows: 2,
    autoplay: true,

    dots: true,
    slidesToShow: 4,
    slideToScroll: 4,
  };
  const responsive = {
    0: { items: 1, itemFit: "contain" },
  };
  const { id } = useParams()

  let foundProduct = {};
  console.log("jaja",id)




  if (id) {
    foundProduct = twoRowCarousel.filter((product) => {
      const children = product.children.filter((product) => {
        if (product.id == id) {
          return product;
        }
      });
    })[0];
  }
  const product = foundProduct;

  const data = twoRowCarousel.map((element) => {
    const children = element.children.map((element) => {
      return (
        <div className="d-flex w-25 p-4">
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
                  setLiked(!liked);
                  if(!liked){
                    const likedProduct = {
                        id: product.id,
                        name: product.name,
                        liked: true,
                      };
                      console.log("haha", likedProduct)
                      props.setWishlist([...props.wishlist, likedProduct]);
                  } else {
                    props.setWishlist(
                        props.wishlist.filter(w => w.id === product.id)
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
              <div style={{ margin: "0 10px 10px 0" }}>{element.icon2}</div>
            </div>
            <div>
              <Rating />
            </div>
          </div>
        </div>
      );
    });
    return <div className="d-flex flex-wrap">{children}</div>;
  });
  return (
    <div>
      <AliceCarousel
        responsive={responsive}
        infinite="false"
        autoPlay
        autoPlayInterval={3000}
      >
        {data}
      </AliceCarousel>
    </div>
  );
};

export default TwoRowCarousel;
