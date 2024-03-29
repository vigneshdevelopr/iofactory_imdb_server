import mongoose from "mongoose";

const moviesSchema = new mongoose.Schema(
  {
    movieName: {
      type: String,
      required: true,
    },
    year: {
      type: String,
      required: true,
    },
    producer: {
      type: String,
      required: true,
    },
    cast: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "actors",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const movies = mongoose.model("movies", moviesSchema);

export { movies };
