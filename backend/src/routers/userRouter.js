const express = require("express");

const User = require("../models/users");

const router = new express.Router();

//POST CREATE USER
router.post("/users", async (req, res) => {
  const firstEntry = new User(req.body);
  try {
    await firstEntry.save();
    res.status(201).send(firstEntry);
  } catch (error) {
    res.status(400).send(error);
  }
});

//GET ALL USER
router.get("/users", async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).send(users);
  } catch (error) {
    res.status(500).send(error);
  }
});

//GET SINGLE USER
router.get("/users/:id", async (req, res) => {
  const _id = req.params.id;
  try {
    const user = await User.findById(_id);
    if (!user) {
      return res.status(404).send("User not found");
    }
    res.status(200).send(user);
  } catch (error) {
    res.status(500).send(error);
  }
});

//PATCH UPDATE SINGLE USER
router.patch("/users/:id", async (req, res) => {
  const _id = req.params.id;

  const updates = req.body;
  try {
    const user = await User.findByIdAndUpdate(_id, updates, {
      new: true,
      runValidators: true,
    });
    if (!user) {
      return res.status(404).send("User not found");
    }
    res.status(200).send(user);
  } catch (error) {
    res.status(500).send(error);
  }
});

//DELETE DELETE SINGLE USER
router.delete("/users/:id", async (req, res) => {
  const _id = req.params.id;

  try {
    const user = await User.findByIdAndDelete(_id);
    if (!user) {
      return res.status(404).send("User not found");
    }
    res.status(200).send(user);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
