import express from "express";
import {
  Bookmark,
  follow,
  getOtherUser,
  Login,
  Logout,
  profile,
  Register,
  unfollow,
} from "../controllers/userController.js";
import isAuthenticated from "../config/auth.js";

const router = express.Router();

router.route("/register").post(Register);
router.route("/login").post(Login);
router.route("/logout").get(Logout);
router.route("/bookmarks/:id").put(isAuthenticated, Bookmark);
router.route("/profile/:id").get(isAuthenticated, profile);
router.route("/otheruser/:id").get(isAuthenticated, getOtherUser);
router.route("/follow/:id").post(isAuthenticated, follow);
router.route("/unfollow/:id").post(isAuthenticated, unfollow);

export default router;
