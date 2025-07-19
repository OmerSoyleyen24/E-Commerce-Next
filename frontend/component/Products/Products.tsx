"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import ProductItem from "./ProductItem";
import ProductsData from "../../data.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Products.css";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

const NextBtn = (props: { onClick?: () => void }) => {
  const { onClick } = props;
  return (
    <button className="glide__arrow glide__arrow--right" onClick={onClick} aria-label="Next">
      <i className="bi bi-chevron-right"></i>
    </button>
  );
};

const PrevBtn = (props: { onClick?: () => void }) => {
  const { onClick } = props;
  return (
    <button className="glide__arrow glide__arrow--left" onClick={onClick} aria-label="Previous">
      <i className="bi bi-chevron-left"></i>
    </button>
  );
};

const Products = () => {
  const [products] = useState(ProductsData);

  const sliderSettings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextBtn />,
    prevArrow: <PrevBtn />,
    responsive: [
      {
        breakpoint: 992,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 520,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className="products">
      <div className="container">
        <div className="section-title">
          <h2>Featured Products</h2>
          <p>Summer Collection New Modern Design</p>
        </div>
        <div className="product-wrapper">
          <Slider {...sliderSettings}>
            {products.map((product) => (
              <ProductItem productItem={product} key={product.id} />
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Products;