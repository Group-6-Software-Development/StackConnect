require("dotenv").config();
const connectDB = require("./config/db");
const express = require("express");
const cors = require("cors");

const app = express();
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

app.use("/api/users", require("./routers/usersRoutes"));

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
