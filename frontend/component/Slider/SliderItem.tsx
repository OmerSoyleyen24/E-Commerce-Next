import React from "react";

interface SliderItemProps {
  imageSrc: string;
}

const SliderItem: React.FC<SliderItemProps> = ({ imageSrc }) => {
  return (
    <div className="slider-item fade">
      <div className="slider-image">
        <img src={imageSrc} className="img-fluid" alt="slider-image" />
      </div>
      <div className="container">
        <p className="slider-title">SUMMER 2022</p>
        <h2 className="slider-heading">Save up to 70%</h2>
        <a href="#" className="btn btn-lg btn-primary">
          Explore Now
        </a>
      </div>
    </div>
  );
};

export default SliderItem;