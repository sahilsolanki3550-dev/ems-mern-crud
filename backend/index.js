const express = require("express");
require("dotenv").config();
require("./db");
const cors = require("cors");
const port = process.env.PORT;
const app = express();
const employeeRouter = require("./routers/employeeRouter");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());



// Root route
app.get("/", (req, res) => {
  res.json({ message: "EMS Backend Running" });
});


app.use("/employee", employeeRouter);


app.listen(port, () => {
  console.log(`Your App is Running at ${port}`);
});


module.exports = app;