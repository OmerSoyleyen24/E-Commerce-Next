import jwt, { JwtPayload } from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

const JWT_SECRET = "BnYnHspActm26a";
if (!JWT_SECRET) {
  throw new Error("JWT_SECRET tanımlanmamış!");
}

// Express Request objesine user özelliği eklemek için interface genişletiyoruz
declare module "express-serve-static-core" {
  interface Request {
    user?: string | JwtPayload;
  }
}

function verifyTokenMiddleware(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(403).send({ message: "Token gerekli!" });
  }

  try {
    req.user = jwt.verify(token, JWT_SECRET);
    next();
  } catch (error) {
    res.status(403).send({ message: "Geçersiz token!" });
  }
}

interface UserPayload {
  username: string;
  email: string;
}

function generateToken(user: UserPayload): string {
  return jwt.sign(
    {
      username: user.username,
      email: user.email,
    },
    JWT_SECRET,
    { expiresIn: "1h" }
  );
}

export { verifyTokenMiddleware, generateToken };