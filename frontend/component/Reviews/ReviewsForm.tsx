const ReviewsForm = () => {
  return (
    <form className="comment-form">
      <p className="comment-notes">
        Your email will not be published.Required fields are marked
        <span>*</span>
      </p>
      <div className="form-comment comment-form-rating">
        <label>
          Your rating
          <span>*</span>
        </label>
        <div className="stars">
          <a href="#" className="star">
            <i className="bi bi-star-fill"></i>
          </a>
          <a href="#" className="star">
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
          </a>
          <a href="#" className="star">
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
          </a>
          <a href="#" className="star">
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
          </a>
          <a href="#" className="star">
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
          </a>
        </div>
      </div>
      <div className="form-comment comment-form-comment">
        <label htmlFor="comment">
          Your Review
          <span>*</span>
        </label>
        <textarea id="comment" rows={10} cols={50}></textarea>
      </div>
      <div className="form-comment comment-form-author">
        <label htmlFor="author">
          Name
          <span>*</span>
        </label>
        <input id="author" type="text" />
      </div>
      <div className="form-comment comment-form-email">
        <label htmlFor="email">
          Email
          <span>*</span>
        </label>
        <input id="email" type="email" />
      </div>
      <div className="form-comment comment-form-cookies">
        <input id="checkbox" type="checkbox" />
        <label htmlFor="checkbox">
          Save my name,email and website in this browser for the next time my comment.
        </label>
      </div>
      <div className="form-submit">
        <input type="submit" className="btn btn-dark" value="Submit" />
      </div>
    </form>
  );
};

export default ReviewsForm;