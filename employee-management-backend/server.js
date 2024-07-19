const express = require("express");
const { config } = require("dotenv");
const mongoose = require("mongoose");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const employeeRoutes = require("./routes/employeeRoutes");

const app = express();
config({ path: "./.env" });
const PORT = process.env.PORT;

mongoose
  .connect(process.env.MONGO_URI, {
    dbName: "EMPLOYEES-DATABASE",
  })
  .then(() => {
    console.log(`DATABASE CONNECTED ESTABLISHED SUCCESSFULLY`);
  })
  .catch((err) => {
    console.log(err.message);
  });

app.use(cors());
app.use(bodyParser.json({ limit: "50mb" })); // Increase limit for JSON payloads
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true })); // Increase limit for URL-encoded payloads

app.use("/api/employees", employeeRoutes);

app.listen(PORT, (req, res) => {
  console.log(`Server listening on ${PORT}`);
});
