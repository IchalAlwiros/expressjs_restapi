const express = require("express");
const {
    User
} = require("./routes/index")


const cors = require("cors");

// require('dotenv').config();

const app = express();
const port = 8080;

app.use(cors());
app.use(express.json());
app.use("/", User)

app.listen(port, () => {
    console.log(`app on port ${port}`);
  });