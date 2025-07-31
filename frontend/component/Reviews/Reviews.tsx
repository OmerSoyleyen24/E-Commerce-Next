import React from "react";
import ReviewsForm from "./ReviewsForm";
import ReviewItem from "./ReviewItem";
import "./Reviews.css";

interface ReviewsProps {
  active: string;
}

const Reviews: React.FC<ReviewsProps> = ({ active }) => {
  return (
    <div className={`tab-panel-reviews ${active}`}>
      <h3>2 reviews for Basic Colored Sweatpants With Elastic Hems</h3>
      <div className="comments">
        <ol className="comment-list">
          <ReviewItem />
          <ReviewItem />
        </ol>
      </div>
      <div className="review-form-wrapper">
        <h2>Add a review</h2>
        <ReviewsForm />
      </div>
    </div>
  );
};

export default Reviews;