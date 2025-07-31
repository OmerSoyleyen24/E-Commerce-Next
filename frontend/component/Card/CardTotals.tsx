"use client";

import { useContext, useState } from "react";
import { CardContext } from "@/context/CardContext";
import { useRouter } from "next/navigation";

const CardTotals = () => {
    const { cardItems } = useContext(CardContext)!;
    const [fastCargoChecked, setFastCargoChecked] = useState(false);

    const router = useRouter();

    const cargoFee = 15;

    const subTotals = cardItems.reduce((total, item) => {
        return total + (item.price.newPrice * (item.quantity || 1));
    }, 0);

    const cardTotalsResult = fastCargoChecked
        ? parseFloat((subTotals + cargoFee).toFixed(2))
        : parseFloat(subTotals.toFixed(2));

    const submitCardTotals = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        router.push(`/payment?price=${cardTotalsResult}`);
        console.log("Sepet toplamı gönderildi:", cardTotalsResult);
    };

    return (
        <div className="card-totals">
            <h2>Card Totals</h2>
            <table>
                <tbody>
                    <tr className="card-subtotal">
                        <th>Subtotal</th>
                        <td>
                            <span id="subtotal">${subTotals.toFixed(2)}</span>
                        </td>
                    </tr>
                    <tr className="card-shipping">
                        <th>Shipping</th>
                        <td>
                            <ul>
                                <li>
                                    <label>
                                        Fast Cargo : $15.00
                                        <input
                                            type="checkbox"
                                            id="fast-cargo"
                                            checked={fastCargoChecked}
                                            onChange={() => setFastCargoChecked(!fastCargoChecked)}
                                        />
                                    </label>
                                </li>
                                <li>
                                    <a href="#">Change Address</a>
                                </li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <th>Total</th>
                        <td>
                            <strong id="card-total">${cardTotalsResult.toFixed(2)}</strong>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div className="checkout">
                <button className="btn btn-danger btn-lg" onClick={submitCardTotals}>
                    Proceed to checkout
                </button>
            </div>
        </div>
    );
};

export default CardTotals;