import { Tweet } from "../models/tweetSchema.js";
import { User } from "../models/userSchema.js";
import { getOtherUser } from "./userController.js";

// create tweet
export const createTweet = async (req, res) => {
  try {
    const { description, id } = req.body;

    if (!description) {
      return res.status(401).json({
        message: "fields are required",
        success: false,
      });
    }

    await Tweet.create({
      description,
      userId: id,
    });

    return res.status(201).json({
      message: "Tweet created Successfully",
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

// delete tweet
export const deleteTweet = async (req, res) => {
  try {
    const { id } = req.params;
    await Tweet.findByIdAndDelete(id);
    return res.status(200).json({
      message: "tweet deleted successfully",
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

// like dislike
export const likeDislike = async (req, res) => {
  try {
    const loggedInUserId = req.body.id;
    const tweetId = req.params.id;
    const tweet = await Tweet.findById(tweetId);

    if (tweet.like.includes(loggedInUserId)) {
      // dislike
      await Tweet.findByIdAndUpdate(tweetId, {
        $pull: { like: loggedInUserId },
      });

      return res.status(200).json({
        message: "User dislike your tweet",
      });
    } else {
      // like
      await Tweet.findByIdAndUpdate(tweetId, {
        $push: { like: loggedInUserId },
      });

      return res.status(200).json({
        message: "User like your tweet",
      });
    }
  } catch (error) {
    console.log(error);
  }
};

// get all tweet
export const getAllTweet = async (req, res) => {
  // logged in user tweet + following user tweet

  try {
    const id = req.params.id;
    const loggedInUser = await User.findById(id);
    const loggedInUserTweets = await Tweet.find({ userId: id });

    const followingUserTweets = await Promise.all(
      loggedInUser.following.map((otherUserId) => {
        return Tweet.find({ userId: otherUserId });
      })
    );

    return res.status(200).json({
      tweets: loggedInUserTweets.concat(...followingUserTweets),
    });
  } catch (error) {
    console.log(error);
  }
};
