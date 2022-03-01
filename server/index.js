const express = require("express");
const mongoose = require("mongoose");
const UserRouter = require("./routes/UserRouter.js");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use("/user", UserRouter);

mongoose
  .connect(
    'mongodb+srv://jayshree:12345@cluster0.ltmfq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
    )
  .then(
    app.listen("8000", () => {
      console.log("Server runs at port 8000");
    })
  )
  .catch((err) => {
    console.log(err);
  });
