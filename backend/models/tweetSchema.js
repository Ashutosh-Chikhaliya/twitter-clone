import mongoose, { mongo } from "mongoose";

const tweetSchema = new mongoose.Schema(
  {
    description: {
      type: String,
      required: true,
    },
    like: {
      type: Array,
      default: [],
    },

    bookmarks: {
      type: Array,
      default: [],
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const Tweet = mongoose.userSchema("Tweet", tweetSchema);
