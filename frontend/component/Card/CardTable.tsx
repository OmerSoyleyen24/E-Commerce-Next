"use client";

import React, { useContext } from "react";
import { CardContext } from "@/context/CardContext";
import CardItem from "./CardItem";

const CardTable: React.FC = () => {
  const context = useContext(CardContext);

  if (!context) {
    return <p>Yükleniyor...</p>;
  }

  const { cardItems } = context;

  return (
    <table className="shop-table">
      <thead>
        <tr>
          <th className="product-thumbnail">&nbsp;</th>
          <th className="product-name">Product</th>
          <th className="product-price">Price</th>
          <th className="product-quantity">Quantity</th>
          <th className="product-subtotal">Subtotal</th>
        </tr>
      </thead>
      <tbody className="card-wrapper">
        {cardItems.length === 0 ? (
          <tr>
            <td colSpan={5} style={{ textAlign: "center" }}>
              Sepetiniz boş.
            </td>
          </tr>
        ) : (
          cardItems.map((item) => <CardItem key={item.id} cardItem={item} />)
        )}
      </tbody>
    </table>
  );
};

export default CardTable;