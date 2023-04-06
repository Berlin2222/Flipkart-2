import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  id: {
    type: String,
    require: true,
    unique: true,
  },
  url: String,
  detailUrl: String,
  title: Object,
  shortTitle: Object,
  longTitle: Object,
  quantity: Number,
  description: String,
  discount: String,
  tagline: String,
});

const Details = mongoose.model("Details", productSchema);

export default Details;
