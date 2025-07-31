"use client"

import { useContext } from "react";
import { CardContext } from "@/context/CardContext";
import Link from "next/link";
import "./ProductItem.css";

interface ProductItemType {
  id: number | string;
  name: string;
  img: {
    thumbs: string[];
  };
  price: {
    newPrice: number;
    oldPrice: number;
  };
  discount: number;
}

interface Props {
  productItem: ProductItemType;
}

const ProductItem: React.FC<Props> = ({ productItem }) => {

  const { cardItems, addToCard } = useContext(CardContext);

  const filteredCard = cardItems.find(
    (cardItem) => cardItem.id === productItem.id
  );

  return (
    <li className="product-list-item glide__slide glide__slide--active">
      <div className="product-image">
        <a href="#">
          <img src={productItem.img.thumbs[0]} className="img1" alt={productItem.name} />
          <img src={productItem.img.thumbs[1]} className="img2" alt={productItem.name} />
        </a>
      </div>
      <div className="product-info">
        <a href="#" className="product-title">
          {productItem.name}
        </a>
        <ul className="product-star">
          <li>
            <i className="bi bi-star-fill"></i>
          </li>
          <li>
            <i className="bi bi-star-fill"></i>
          </li>
          <li>
            <i className="bi bi-star-fill"></i>
          </li>
          <li>
            <i className="bi bi-star-fill"></i>
          </li>
          <li>
            <i className="bi bi-star-half"></i>
          </li>
        </ul>
        <div className="product-prices">
          <strong className="new-price">${productItem.price.newPrice.toFixed(2)}</strong>
          <span className="old-price">${productItem.price.oldPrice.toFixed(2)}</span>
        </div>
        <span className="product-discount">%{productItem.discount}</span>
        <div className="product-links">
          <button
            className="add-to-cart"
            onClick={() => addToCard(productItem)}
            disabled={!!filteredCard}
          >
            <i className="bi bi-basket-fill"></i>
          </button>
          <button>
            <i className="bi bi-heart-fill"></i>
          </button>
          <Link href={`/productDetails/${productItem.id}`} className="product-link">
            <i className="bi bi-eye-fill"></i>
          </Link>
          <a href="#">
            <i className="bi bi-share-fill"></i>
          </a>
        </div>
      </div>
    </li>
  );
};

export default ProductItem;
