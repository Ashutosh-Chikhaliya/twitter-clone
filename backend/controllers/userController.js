import { User } from "../models/userSchema.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

// register
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

    const user = await User.findOne({ email });

    if (user) {
      return res.status(401).json({
        message: "user already exist.",
        success: false,
      });
    }

    const hashedPassword = await bcryptjs.hash(password, 16);

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

// login
export const Login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // basic validation
    if (!email || !password) {
      return res.status(401).json({
        message: "all fields are required",
        success: false,
      });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({
        message: "user does not exist with this email !",
        success: false,
      });
    }

    const isMatch = await bcryptjs.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({
        message: "Incorrect email or password",
        success: false,
      });
    }

    const tokenData = {
      userId: user._id,
    };
    const token = await jwt.sign(tokenData, process.env.TOKEN_SECERET, {
      expiresIn: "1d",
    });

    return res
      .status(201)
      .cookie("token", token, { expiresIn: "1d", httpOnly: true })
      .json({
        message: `welcome back ${user.name}`,
        success: true,
      });
  } catch (error) {
    console.log(error);
  }
};

// logout
export const Logout = async (req, res) => {
  return res.cookie("token", "", { expiresIn: new Date(Date.now()) }).json({
    message: "user logout successfully",
    success: true,
  });
};

// bookmark
export const Bookmark = async (req, res) => {
  try {
    const loggedInUserId = req.body.id;
    const tweetId = req.params.id;
    const user = await User.findById(loggedInUserId);

    if (user.bookmarks.includes(tweetId)) {
      // remove
      await User.findByIdAndUpdate(loggedInUserId, {
        $pull: { bookmarks: tweetId },
      });

      return res.status(200).json({
        message: "remove from bookmark",
      });
    } else {
      // bookmark
      await User.findByIdAndUpdate(loggedInUserId, {
        $push: { bookmarks: tweetId },
      });

      return res.status(200).json({
        message: "saved to bookmarks",
      });
    }
  } catch (error) {
    console.log(error);
  }
};

// profile
export const profile = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findById(id).select("-password");
    return res.status(200).json({
      user,
    });
  } catch (error) {
    console.log(error);
  }
};

// get other user profile in suggestion
export const getOtherUser = async (req, res) => {
  try {
    const { id } = req.params;
    const otherUser = await User.find({ _id: { $ne: id } }).select("-password");

    if (!otherUser) {
      return res.status(200).json({
        message: "currently do not have any user !",
      });
    }

    return res.status(200).json({
      otherUser,
    });
  } catch (error) {
    console.log(error);
  }
};

// follow
export const follow = async (req, res) => {
  try {
    const loggedInUserId = req.body.id;
    const userId = req.params.id;

    const loggedInUser = await User.findById(loggedInUserId); // ashutosh
    const user = await User.findById(userId); // rohit sharma

    if (!user.followers.includes(loggedInUserId)) {
      await user.updateOne({ $push: { followers: loggedInUserId } });
      await loggedInUser.updateOne({ $push: { following: userId } });
    } else {
      return res.status(400).json({
        message: `already followed to ${user.name}`,
      });
    }

    return res.status(200).json({
      message: `${loggedInUser.name} just follow to ${user.name}`,
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

// unfollow
export const unfollow = async (req, res) => {
  try {
    const loggedInUserId = req.body.id;
    const userId = req.params.id;

    const loggedInUser = await User.findById(loggedInUserId); // ashutosh
    const user = await User.findById(userId); // rohit sharma

    if (loggedInUser.following.includes(userId)) {
      await user.updateOne({ $pull: { followers: loggedInUserId } });
      await loggedInUser.updateOne({ $pull: { following: userId } });
    } else {
      return res.status(400).json({
        message: `user hase not followed yet`,
      });
    }

    return res.status(200).json({
      message: `${loggedInUser.name} just unfollow to ${user.name}`,
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};
