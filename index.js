require("dotenv").config();

const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const indexRouter = require("./routes/index");
const connectToDB = require("./mongoose");

const app = express();
app.use(cors());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);
app.use(cookieParser());

app.use("/api/v1", indexRouter);
app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
  connectToDB();
});
