import express from "express";
import dotenv from "dotenv";
import databbaseConnection from "./config/database.js";

dotenv.config({
  path: ".env",
});

databbaseConnection();
const app = express();

app.listen(process.env.PORT, () => {
  console.log(`server listen at port ${process.env.PORT}`);
});
