const mongoose = require("mongoose");

const userLogSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    action: {
      type: String,
      required: true,
    },
    ipAddress: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const userLog = mongoose.model("UserLog", userLogSchema);

module.exports = userLog;
