import { User } from "../models/userSchema";
import bcrypt from "bcryptjs";

export const Register = async (req, res) => {
  try {
    const { name, username, email, password } = req.body;

    // basic validation
    if (!name || !username || !email || !password) {
      return res.status(401).json({
        message: "all fields are required",
        success: false,
      });
    }

    const user = await User.findOne(email);

    if (user) {
      return res.status(401).json({
        message: "user already exist.",
        success: false,
      });
    }

    const hashedPassword = await bcrypt.hash(password, 16);

    await User.create({
      name,
      username,
      email,
      password: hashedPassword,
    });

    return res.status(201).json({
      message: "account created successfully",
      status: true,
    });
  } catch (error) {
    console.log(error);
  }
};
