import express, { Request, Response, Router } from "express";
import Iyzipay from "iyzipay";
import { verifyTokenMiddleware } from "../jwt.js";

const router: Router = express.Router();

const iyzipay = new Iyzipay({
    apiKey: 'sandbox-5MoYPImLG4Ip0eDAE2rmXRWmG7sb5G3m',
    secretKey: 'sandbox-QJVv5vBvI8O82F5GgghG8GLW6v4KVyP6',
    uri: 'https://sandbox-api.iyzipay.com'
});

// Kart bilgileri tipi
interface CardDetails {
    name: string;
    number: string;
    expiryMonth: string;
    expiryYear: string;
    cvc: string;
}

// Payment request tipi
interface PaymentRequestBody {
    price: number;
    cardDetails: CardDetails;
}

router.post('/payment', async (req: Request<{}, {}, PaymentRequestBody>, res: Response) => {
    const { price, cardDetails } = req.body;

    if (!price || !cardDetails) {
        return res.status(400).json({ error: 'Price and card details are required' });
    }

    const { name, number, expiryMonth, expiryYear, cvc } = cardDetails;

    if (!name || !number || !expiryMonth || !expiryYear || !cvc) {
        return res.status(400).json({ error: 'All card details are required' });
    }

    const paymentData = {
        locale: "TR" as const, // İyziyapi 'TR' (büyük harf) bekler
        conversationId: "123456" as const, // Sabit bir string
        price: "1000" as const,            // İyziyapi'ye string olarak gönderilir
        paidPrice: "1000" as const,        // İyziyapi'ye string olarak gönderilir
        currency: "TRY" as const,          // İyziyapi 'TRY' (büyük harf) bekler
        basketId: "abc123" as const,       // Sabit bir string
        paymentGroup: "PRODUCT" as const,  // İyziyapi 'PRODUCT' gibi bir sabit bekler

        paymentCard: {
            cardHolderName: "John Doe" as const,
            cardNumber: "1234567890123456" as const,
            expireMonth: "12" as const,
            expireYear: "2025" as const,
            cvc: "123" as const,
            cardAlias: "myCardAlias" as const, // 'cardAlias' alanı eklendi
        } as const,

        buyer: {
            id: "123" as const,
            name: "John" as const,
            surname: "Doe" as const, // Eksik olan 'surname' eklendi
            identityNumber: "11111111111" as const, // Eksik olan 'identityNumber' eklendi
            email: "john@example.com" as const,
            phone: "+905350000000" as const, // Telefon formatına dikkat
            registrationAddress: "Some Address, Some City, Some Country" as const, // Eksik olan 'registrationAddress' eklendi
            ip: "127.0.0.1" as const, // Eksik olan 'ip' eklendi (gerçekte req.ip kullanılmalı)
            city: "Istanbul" as const, // Muhtemel eksik alan
            country: "Turkey" as const, // Muhtemel eksik alan
        } as const,

        basketItems: [
            {
                id: "item1",
                name: "Product 1",
                price: "500",
                quantity: 1,
                category1: "Electronics" as const,
                itemType: "PHYSICAL" as const,    
            },
            {
                id: "item2",
                name: "Product 2",
                price: "500",
                quantity: 1,
                category1: "Electronics" as const,
                itemType: "PHYSICAL" as const,    
            }
        ],

        installments: 1 as const,

        shippingAddress: {
            address: "Shipping Address, City" as const,
            zipCode: "12345" as const,
            country: "Turkey" as const,
            phone: "+90 123 456 7890" as const,
            contactName: "John Doe" as const,
            city: "Istanbul" as const,
        } as const,

        billingAddress: {
            address: "Billing Address, City" as const,
            zipCode: "12345" as const,
            country: "Turkey" as const,
            phone: "+90 123 456 7890" as const,
            contactName: "John Doe" as const,
            city: "Istanbul" as const,
        } as const,
    };

    try {
        iyzipay.payment.create(paymentData, (error, result) => {
            if (error) {
                console.error('Error:', error);
                return res.status(500).json({ error: 'Payment failed', details: error });
            }

            res.status(200).json(result);
        });
    } catch (err) {
        console.error('Error during payment processing:', err);
        res.status(500).json({ error: 'An error occurred while processing the payment' });
    }
});

router.get("/protected", verifyTokenMiddleware, (req: Request, res: Response) => {
    res.status(200).send({ message: "Korunan alana erişim başarılı!", user: (req as any).user });
});

export default router;
