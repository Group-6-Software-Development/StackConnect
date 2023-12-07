require("dotenv").config();
const connectDB = require("./config/db");
const express = require("express");
const cors = require("cors");
const { errorHandler } = require("./middleware/errorMiddleware");

const PORT = process.env.PORT || 3001;

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/user", require("./routers/userRoutes"));
app.use("/profile", require("./routers/profileRoutes"));

app.use(errorHandler);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
