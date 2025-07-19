import { useState } from "react"
import Slider from "react-slick"
import ProductsData from "../../../data.json"
import "./ProductGallery.css"

type ArrowBtnProps = {
  onClick?: () => void;
};

const NextBtn = ({ onClick }: ArrowBtnProps) => {
  return (
    <button className="glide__arrow glide__arrow--right" onClick={onClick} type="button">
      <i className="bi bi-chevron-right"></i>
    </button>
  );
};

const PrevBtn = ({ onClick }: ArrowBtnProps) => {
  return (
    <button className="glide__arrow glide__arrow--left" onClick={onClick} type="button">
      <i className="bi bi-chevron-left"></i>
    </button>
  );
};

const ProductGallery = () => {
  const [activeImg, setActiveImg] = useState(ProductsData[1].img.thumbs[0]);

  const sliderSettings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextBtn />,
    prevArrow: <PrevBtn />,
  };

  return (
    <div className="product-gallery">
      <div className="single-image-wrapper">
        <img src={activeImg} id="single-image" className="img-fluid" alt="Active product" />
      </div>
      <div className="product-thumb">
        <div>
          <ol className="gallery-thumbs glide__slides">
            <Slider {...sliderSettings}>
              {ProductsData[1].img.thumbs.map((itemImg, index) => (
                <li
                  className="glide__slide glide__slide--active"
                  key={index}
                  onClick={() => setActiveImg(itemImg)}
                >
                  <img
                    src={itemImg}
                    alt={`Thumb ${index + 1}`}
                    className={`img-fluid ${itemImg === activeImg ? "active" : ""}`}
                  />
                </li>
              ))}
            </Slider>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default ProductGallery;