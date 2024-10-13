import mongoose from "mongoose";

const bookSchema = mongoose.Schema(
  {
    _id: {
      type: mongoose.Schema.ObjectId,
      required: true,
      auto: true,
    },
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    publishYear: {
      type: Number,
      required: true,
    }
  },
  {
    timestamps: true,
  }
);

export const Book = mongoose.model('Book',bookSchema);


