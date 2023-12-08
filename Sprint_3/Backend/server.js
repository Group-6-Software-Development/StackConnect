// server.js
console.log("Server.js is running...");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const jobRouter = require("./routers/jobs"); // Import the job router

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3002;
console.log("Using port:", PORT);

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to the MongoDB database");
});

app.use("/api/jobs", jobRouter); // Use the job router for "/api/jobs" routes

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
