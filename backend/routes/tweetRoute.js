import express from "express";
import {
  createTweet,
  deleteTweet,
  getAllTweet,
  likeDislike,
} from "../controllers/tweetController.js";
import isAuthenticated from "../config/auth.js";

const router = express.Router();

router.route("/create").post(isAuthenticated, createTweet);
router.route("/delete/:id").delete(isAuthenticated, deleteTweet);
router.route("/like/:id").put(isAuthenticated, likeDislike);
router.route("/getAllTweets/:id").get(isAuthenticated, getAllTweet);

export default router;
