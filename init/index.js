const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../moduls/listing.js");

main()
  .then(() => {
    console.log("mongoose connection sucessful");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/wanderlust");
}

const initDb = async () => {
  await Listing.deleteMany({});
  await Listing.insertMany(initData.data);
  console.log("data was initialised");
};
initDb();
