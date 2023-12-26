import mongoose, { Schema } from "mongoose";

const Topic = new Schema(
  {
    title: String,
    description: String,
  },
  {
    timestamps: true,
  }
);

const TopicModel = mongoose.model("TopicModel", Topic);

export default TopicModel;
