const mongoose = require("mongoose");
const URI = process.env.MONGO_URI;

console.log(URI);

const connectToDB = () => {
  mongoose
    .connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((err) => console.error(err));
};

module.exports = connectToDB;
