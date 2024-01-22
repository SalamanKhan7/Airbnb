const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let listingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  image: {
    type: String,
    default:
      "https://www.istockphoto.com/essential/photo/wild-grass-in-the-mountains-at-sunset-gm1322277517-408286719",
    set: (v) =>
      v === ""
        ? "https://www.istockphoto.com/essential/photo/wild-grass-in-the-mountains-at-sunset-gm1322277517-408286719"
        : v,
  },
  price: Number,
  location: String,
  country: String,
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
