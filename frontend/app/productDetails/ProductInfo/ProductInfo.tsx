import "./ProductInfo.css"

const ProductInfo = () => {
    return (
        <div className="product-info">
            <div className="product-title">
                Ridley High Waist
            </div>
            <div className="product-review">
                <ul className="product-star">
                    <li><i className="bi bi-star-fill"></i></li>
                    <li><i className="bi bi-star-fill"></i></li>
                    <li><i className="bi bi-star-fill"></i></li>
                    <li><i className="bi bi-star-fill"></i></li>
                    <li><i className="bi bi-star-half"></i></li>
                </ul>
                <span>2 reviews</span>
            </div>
            <div className="product-price">
                <s className="old-price">$208</s>
                <strong className="new-price">$165</strong>
            </div>
            <p className="product-desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
            </p>
            <form className="variations-form">
                <div className="variations">
                    <div className="colors">
                        <div className="colors-label">
                            <span>Color</span>
                        </div>
                        <div className="colors-wrapper">
                            <div className="color-wrapper active">
                                <label className="blue-color">
                                    <input type="radio" name="product-color" />
                                </label>
                            </div>
                            <div className="color-wrapper">
                                <label className="red-color">
                                    <input type="radio" name="product-color" />
                                </label>
                            </div>
                            <div className="color-wrapper">
                                <label className="green-color">
                                    <input type="radio" name="product-color" />
                                </label>
                            </div>
                            <div className="color-wrapper">
                                <label className="purple-color">
                                    <input type="radio" name="product-color" />
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="values">
                        <div className="values-label">
                            <span>Size</span>
                        </div>
                        <div className="values-list">
                            <span>XS</span>
                            <span>S</span>
                            <span className="active">M</span>
                            <span>L</span>
                            <span>XL</span>
                        </div>
                    </div>
                    <div className="card-button">
                        <input type="number" id="quantity" defaultValue="1" min="1" />
                        <button className="btn btn-lg btn-primary" type="button" id="add-to-card">Add to
                            card</button>
                    </div>
                    <div className="product-extra-buttons">
                        <a href="#">
                            <i className="bi bi-globe" style={{ marginRight: "5px" }}></i>
                            <span>Size Guide</span>
                        </a>
                        <a href="#">
                            <i className="bi bi-heart" style={{ marginRight: "5px" }}></i>
                            <span>Add to Wishlist</span>
                        </a>
                        <a href="#">
                            <i className="bi bi-share" style={{ marginRight: "5px" }}></i>
                            <span>Share this product</span>
                        </a>
                    </div>
                </div>
            </form>
            <div className="divider"></div>
            <div className="product-meta">
                <div className="product-sku">
                    <span>SKU:</span>
                    <strong>BE45VGRT</strong>
                </div>
                <div className="product-categories">
                    <span>Categories:</span>
                    <strong>Pants,Man</strong>
                </div>
                <div className="product-tags">
                    <span>Tags:</span>
                    <strong>Black,white</strong>
                </div>
            </div>
        </div>
    )
}

export default ProductInfo