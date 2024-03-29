import mongoose from "mongoose";

const actorsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    dob: {
      type: String,
      required: true,
    },
    filmography: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "movies",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const actors = mongoose.model('actors', actorsSchema)
export{actors}
