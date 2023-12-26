import mongoose, { Schema } from "mongoose";

const Idea = new Schema(
  {
    title: String,
    description: String,
  },
  {
    timestamps: true,
  }
);

const IdeaModel = mongoose.model("IdeaModel", Idea);

export default IdeaModel;
