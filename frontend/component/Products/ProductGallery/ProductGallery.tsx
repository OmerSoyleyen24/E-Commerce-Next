"use client";

import { useState } from "react";
import Slider from "react-slick";
import ProductsData from "../../../data.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ProductGallery.css";

interface ProductGalleryProps {
  productId: string;
}

const NextBtn = (props: any) => {
  const { onClick } = props;
  return (
    <button className="slick-arrow slick-next" onClick={onClick} type="button">
      <i className="bi bi-chevron-right"></i>
    </button>
  );
};

const PrevBtn = (props: any) => {
  const { onClick } = props;
  return (
    <button className="slick-arrow slick-prev" onClick={onClick} type="button">
      <i className="bi bi-chevron-left"></i>
    </button>
  );
};

const ProductGallery: React.FC<ProductGalleryProps> = ({ productId }) => {
  const product = ProductsData.find((p) => p.id.toString() === productId);

  if (!product) return <div>Ürün bulunamadı.</div>;

  const [activeImg, setActiveImg] = useState(product.img.thumbs[0]);

  const sliderSettings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextBtn />,
    prevArrow: <PrevBtn />,
  };

  return (
    <div className="product-gallery">
      <div className="single-image-wrapper">
        <img
          src={activeImg}
          id="single-image"
          className="img-fluid"
          alt="Active product"
        />
      </div>
      <div className="product-thumb">
        <Slider {...sliderSettings}>
          {product.img.thumbs.map((itemImg, index) => (
            <div
              key={index}
              onClick={() => setActiveImg(itemImg)}
              style={{ cursor: "pointer" }}
            >
              <img
                src={itemImg}
                alt={`Thumb ${index + 1}`}
                className={`img-fluid ${itemImg === activeImg ? "active" : ""}`}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ProductGallery;