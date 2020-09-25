const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema(
  {
    Name: {
      type: String,
      required: true,
      trim: true,
    },
    Age: {
      type: Number,
      required: true,
    },
    Email: {
      type: String,
      required: true,
      trim: true,
      validate(value) {
        if (!validator.isEmail(value)) {
          throw new Error("Email is Invalid");
        }
      },
    },
    phonenumber: {
      type: Number,
      required: true,
      trim: true,
    },
    date: {
      type: Date,
      required: true,
    },
    _appId: {
      type: String,
      required: true,
    },
    status: {
      type: Boolean,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
