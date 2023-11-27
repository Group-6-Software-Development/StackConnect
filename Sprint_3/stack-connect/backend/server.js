require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const port = process.env.PORT;

// import routes ↓
const userRoutes = require("./routes/user");
// ------------

// express app
const app = express();

// middleware
app.use(express.json());

// log request path and method
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// Routes
app.use("/api/user", userRoutes);

// connect to database
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(port, () => {
      console.log("Connected to db & listening on port:", port);
    });
  })
  .catch((error) => {
    console.log(error);
  });
