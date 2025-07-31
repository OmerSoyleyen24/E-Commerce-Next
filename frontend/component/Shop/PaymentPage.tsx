'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useState, ChangeEvent } from 'react';
import axios from 'axios';

interface CardDetails {
  name: string;
  number: string;
  expiryMonth: string;
  expiryYear: string;
  cvc: string;
}

interface PaymentStatus {
  [key: string]: any;
}

export default function PaymentPage() {
  const searchParams = useSearchParams();
  const price = searchParams.get('price');

  const [cardDetails, setCardDetails] = useState<CardDetails>({
    name: '',
    number: '',
    expiryMonth: '',
    expiryYear: '',
    cvc: '',
  });

  const [paymentStatus, setPaymentStatus] = useState<PaymentStatus | null>(null);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCardDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePayment = async () => {
    if (!price) return;

    try {
      const response = await axios.post('http://localhost:3000/payment', {
        price: Number(price),
        cardDetails,
      });
      setPaymentStatus(response.data);
    } catch (error) {
      setPaymentStatus({ error: 'Ödeme işlemi başarısız oldu' });
    }
  };

  return (
    <div className="payment-form" style={{ margin: '75px 0' }}>
      <div className="container">
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <h3 style={{ fontSize: '1.5rem', margin: '0 0 50px 0' }}>Kredi Kartı Bilgileri</h3>
          <input
            type="text"
            name="name"
            placeholder="Cardholder's Name"
            value={cardDetails.name}
            onChange={handleInputChange}
          />
          <br />
          <input
            type="text"
            name="number"
            placeholder="Card Number"
            value={cardDetails.number}
            onChange={handleInputChange}
          />
          <br />
          <input
            type="text"
            name="expiryMonth"
            placeholder="Expiry Month"
            value={cardDetails.expiryMonth}
            onChange={handleInputChange}
          />
          <br />
          <input
            type="text"
            name="expiryYear"
            placeholder="Expiry Year"
            value={cardDetails.expiryYear}
            onChange={handleInputChange}
          />
          <br />
          <input
            type="text"
            name="cvc"
            placeholder="CVC"
            value={cardDetails.cvc}
            onChange={handleInputChange}
          />
          <br />
        </div>
        <button
          className="btn btn-primary"
          style={{ margin: '50px 0 0 calc(100% - 150px)' }}
          onClick={handlePayment}
          disabled={!price}
        >
          Pay Now {price} TL
        </button>

        {paymentStatus && (
          <div>
            <h3>Ödeme Durumu:</h3>
            <pre>{JSON.stringify(paymentStatus, null, 2)}</pre>
          </div>
        )}
      </div>
    </div>
  );
}