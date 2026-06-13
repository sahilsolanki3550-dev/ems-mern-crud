// const mongoose = require("mongoose");

// mongoose
//   .connect(process.env.MONGO_URI)
//   .then(() => {
//     console.log("Database Connected Successfully");
//   })
//   .catch((e) => {
//     console.log(e);
//   });

const mongoose = require("mongoose");

console.log("MONGO_URI exists:", !!process.env.MONGO_URI);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB Connected");
  })
  .catch((err) => {
    console.error("❌ MongoDB Connection Error:", err);
  });