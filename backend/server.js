const express = require("express");
const connectDB = require("../config/connectDB");
require("colors");
const path = require("path");
const configPath = path.join(__dirname, "..", "config", ".env");
require("dotenv").config({ path: configPath });
const errorHandler = require("./middlewares/errorHandler");

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/api/v1", require("./routes/postsRoutes"));

app.use(errorHandler);

connectDB();

app.listen(process.env.PORT, () => {
  console.log(`server is running on ${process.env.PORT}`.green.bold.italic);
});
