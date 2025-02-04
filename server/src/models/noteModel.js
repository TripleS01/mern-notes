import mongoose from "mongoose";

const noteSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please provide a title"],
      unique: true,
    },

    description: {
      type: String,
      default: "No description",
    },

  }, { timestamps: true });

const noteModel = mongoose.model("Note", noteSchema);

export default noteModel;