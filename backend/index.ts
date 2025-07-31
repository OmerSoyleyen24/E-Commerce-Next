import express, { Express, Request, Response } from "express";
import cors from "cors";
import { initDbPool } from "./db.js";
import userRouter from './routes/userRouter.js';
import accountRouter from './routes/accountRouter.js';
import orderRouter from './routes/orderRouter.js';

const app: Express = express();

app.use(cors());
app.use(express.json());

app.use("/user", userRouter);
app.use("/account", accountRouter);
app.use("/order", orderRouter);

const PORT = 3000;

app.listen(PORT, async () => {
  try {
    await initDbPool();
    console.log(`Port ${PORT}’de çalışıyor...`);
  } catch (error) {
    console.error("Veritabanı başlatılamadı:", error);
    process.exit(1);
  }
});
