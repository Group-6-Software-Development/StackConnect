const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const profileSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: String,
      required: true,
      unique: true,
    },
    skills: {
      type: Array,
    },
    experience: {
      type: Array,
    },
    education: {
      type: Array,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Profile", profileSchema);
