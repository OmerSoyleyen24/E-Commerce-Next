import React, { useContext } from "react";
import { CardContext } from "@/context/CardContext";

interface CardItemType {
  id: string | number;
  img?: { singleImage?: string };
  name: string;
  price: { newPrice: number };
  quantity?: number;
}

const CardItem: React.FC<{ cardItem: CardItemType }> = ({ cardItem }) => {
  const context = useContext(CardContext);
  if (!context) {
    throw new Error("CardItem must be used within a CardProvider");
  }
  const { removeFromCard } = context;

  const quantity = cardItem.quantity ?? 1;

  return (
    <tr className="card-item">
      <td>
        <div className="card-image">
          <img src={cardItem.img?.singleImage || "/placeholder.png"} alt={cardItem.name} />
          <i
            className="bi bi-x delete-card"
            onClick={() => removeFromCard(cardItem.id)}
            role="button"
            tabIndex={0}
            aria-label="Remove item"
            onKeyDown={(e: React.KeyboardEvent) => {
              if (e.key === "Enter" || e.key === " ") {
                removeFromCard(cardItem.id);
              }
            }}
          />
        </div>
      </td>
      <td>{cardItem.name}</td>
      <td>${cardItem.price.newPrice.toFixed(2)}</td>
      <td className="product-quantity">{quantity}</td>
      <td className="product-subtotal">${(cardItem.price.newPrice * quantity).toFixed(2)}</td>
    </tr>
  );
};

export default CardItem;