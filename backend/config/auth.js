import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config({
  path: "../config/.env",
});

const isAuthenticated = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    console.log(req.cookies);

    if (!token) {
      return res.status(401).json({
        message: "user is not authenticated",
        success: false,
      });
    }

    const decode = await jwt.verify(token, process.env.TOKEN_SECERET);

    console.log(decode);
    req.user = decode.userId;
    next();
  } catch (error) {
    console.log(error);
  }
};

export default isAuthenticated;
