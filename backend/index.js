import express from "express";
import dotenv from "dotenv";
import databbaseConnection from "./config/database.js";
import cookieParser from "cookie-parser";
import userRoute from "./routes/userRoute.js";

dotenv.config({
  path: ".env",
});

databbaseConnection();
const app = express();

//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

//api
app.use("/api/v1/user", userRoute);

http: app.listen(process.env.PORT, () => {
  console.log(`server listen at port ${process.env.PORT}`);
});
