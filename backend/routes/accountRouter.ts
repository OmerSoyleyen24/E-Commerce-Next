import express, { Request, Response, Router } from "express";
import { getDbConnection } from "../db.js";
import { verifyTokenMiddleware } from "../jwt.js";
import { RowDataPacket } from "mysql2";

interface AuthenticatedRequest extends Request {
  user: {
    email: string;
    [key: string]: any;
  };
}

interface Address {
  name: string;
  surname: string;
  address: string;
  city: string;
  district: string;
  postal_code: string;
  phone: string;
}

const router: Router = express.Router();

router.get("/getAddress", verifyTokenMiddleware, async (req: Request, res: Response) => {
  const authReq = req as AuthenticatedRequest;
  try {
    const db = await getDbConnection();
    const query = "SELECT * FROM addresses WHERE email = ? LIMIT 1";

    db.execute<RowDataPacket[]>(query, [authReq.user.email], (err, results) => {
      if (err) return res.status(500).send({ message: "Adres alınırken bir hata oluştu!" });
      const rows = results as RowDataPacket[];
      if (rows.length === 0) return res.status(404).send({ message: "Adres bulunamadı!" });

      res.status(200).send({
        message: "Adres başarıyla alındı!",
        address: rows[0],
      });
    });
  } catch (error) {
    res.status(500).send({ message: "Veritabanı bağlantı hatası!" });
  }
});

router.post("/addAddress", verifyTokenMiddleware, async (req: Request, res: Response) => {
  const authReq = req as AuthenticatedRequest;
  const { address } = req.body as { address: Address };

  try {
    const db = await getDbConnection();
    const query = "INSERT INTO addresses (email, name, surname, address, city, district, postal_code, phone) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";

    db.execute(
      query,
      [authReq.user.email, address.name, address.surname, address.address, address.city, address.district, address.postal_code, address.phone],
      (err) => {
        if (err) return res.status(500).send({ message: "Adres eklenirken bir hata oluştu!" });
        res.status(201).send({ message: "Adres başarıyla eklendi!" });
      }
    );
  } catch (error) {
    res.status(500).send({ message: "Veritabanı bağlantı hatası!" });
  }
});

router.get("/protected", verifyTokenMiddleware, (req: Request, res: Response) => {
  const authReq = req as AuthenticatedRequest;
  res.status(200).send({ message: "Korunan alana erişim başarılı!", user: authReq.user });
});

export default router;
