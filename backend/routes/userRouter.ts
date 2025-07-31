import express, { Request, Response, Router } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { getDbConnection } from "../db.js";
import { generateToken, verifyTokenMiddleware } from "../jwt.js";

const router: Router = express.Router();

interface User {
  username: string;
  email: string;
  password: string;
}

interface JwtUserPayload {
  username: string;
  email: string;
}

interface AuthRequest extends Request {
  user?: JwtUserPayload;
}

router.post("/login", async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const db = await getDbConnection();

        const [results] = await db.promise().execute("SELECT * FROM users WHERE email = ?", [email]);
        console.log("Veritabanı sonucu:", results);

        if (!results || results.length === 0) {
            return res.status(401).send({ message: "Hatalı email veya şifre!" });
        }

        const user = results[0];
        console.log("Bulunan kullanıcı:", user);

        const isPasswordValid = await bcrypt.compare(password, user.password);
        console.log("Şifre doğrulama sonucu:", isPasswordValid);

        if (!isPasswordValid) {
            return res.status(401).send({ message: "Hatalı email veya şifre!" });
        }

        const token = generateToken(user);
        res.status(200).send({ message: "Başarıyla giriş yapıldı!", token });
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: "Sunucu hatası!" });
    }
});

router.post("/register", async (req: Request, res: Response) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res
      .status(400)
      .send({ message: "Kullanıcı adı, email ve şifre gereklidir!" });
  }

  try {
    const db = await getDbConnection();
    const hashedPassword = await bcrypt.hash(password, 10);
    const query = "INSERT INTO users (username, email, password) VALUES (?, ?, ?)";

    db.execute(query, [username, email, hashedPassword], (err) => {
      if (err) return res.status(500).send({ message: "Sunucu hatası!" });
      const token = generateToken({ username, email });
      res.status(201).send({ message: "Başarıyla kayıt olundu!", token });
    });
  } catch (error) {
    res.status(500).send({ message: "Veritabanı bağlantı hatası!" });
  }
});

router.put(
  "/updatePassword",
  verifyTokenMiddleware,
  async (req: Request, res: Response) => {
    const { newPassword } = req.body;

    if (!newPassword || newPassword.trim() === "") {
      return res.status(400).send({ message: "Yeni şifre gereklidir!" });
    }

    try {
      const db = await getDbConnection();
      const hashedPassword = await bcrypt.hash(newPassword, 10);
      const query = "UPDATE users SET password = ? WHERE email = ?";

      // Burada req'yi AuthRequest olarak cast ediyoruz
      const authReq = req as AuthRequest;

      if (!authReq.user) {
        return res.status(401).send({ message: "Yetkilendirme başarısız!" });
      }

      db.execute(query, [hashedPassword, authReq.user.email], (err) => {
        if (err)
          return res
            .status(500)
            .send({ message: "Şifre güncellenirken bir hata oluştu!" });
        res.status(200).send({ message: "Şifre başarıyla güncellendi!" });
      });
    } catch (error) {
      res.status(500).send({ message: "Veritabanı bağlantı hatası!" });
    }
  }
);

router.get(
  "/protected",
  verifyTokenMiddleware,
  (req: Request, res: Response) => {
    // Burada da cast
    const authReq = req as AuthRequest;
    res.status(200).send({ message: "Korunan alana erişim başarılı!", user: authReq.user });
  }
);

export default router;
