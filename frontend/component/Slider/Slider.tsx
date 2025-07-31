"use client";

import React, { useState, useEffect } from "react";
import SliderItem from "./SliderItem";
import "./Slider.css";

const Slider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const prevSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(2);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % 3);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      nextSlide();
    }, 3500);

    return () => clearTimeout(timer); // Temizlik fonksiyonu
  }, [currentSlide]);

  return (
    <section id="slider">
      <div id="slider-elements">
        {currentSlide === 0 && <SliderItem imageSrc="/img/slider/slider3.jpg" />}
        {currentSlide === 1 && <SliderItem imageSrc="/img/slider/slider2.jpg" />}
        {currentSlide === 2 && <SliderItem imageSrc="/img/slider/slider1.jpg" />}

        <div className="slider-buttons">
          <button onClick={prevSlide} id="slider-button-left">
            <i className="bi bi-chevron-left"></i>
          </button>
          <button onClick={nextSlide} id="slider-button-right">
            <i className="bi bi-chevron-right"></i>
          </button>
        </div>

        <div className="slider-dots">
          <button
            className={`slider-dot ${currentSlide === 0 ? "active" : ""}`}
            onClick={() => setCurrentSlide(0)}
          >
            <span></span>
          </button>
          <button
            className={`slider-dot ${currentSlide === 1 ? "active" : ""}`}
            onClick={() => setCurrentSlide(1)}
          >
            <span></span>
          </button>
          <button
            className={`slider-dot ${currentSlide === 2 ? "active" : ""}`}
            onClick={() => setCurrentSlide(2)}
          >
            <span></span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Slider;
