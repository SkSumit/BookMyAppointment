const express = require("express");
require("dotenv").config();
const Pusher = require("pusher");
const User = require("../models/users");

const router = new express.Router();

const pusher = new Pusher({
  appId: process.env.PUSHER_APP_ID,
  key: process.env.PUSHER_APP_KEY,
  secret: process.env.PUSHER_APP_SECRET,
  cluster: process.env.PUSHER_APP_CLUSTER,
  encrypted: true,
});

User.watch().
  on('change', data => {
    pusher.trigger("byapp", "update-appointments", 
      data,
    ).catch((error)=>{
      console.log(error)
    });

  });



//POST CREATE USER
router.post("/api/users", async (req, res) => {
  // console.log(req.body);
  const firstEntry = new User(req.body);
  console.log(firstEntry);
  try {
    const lol = await firstEntry.save();
    console.log(lol);
    res.status(201).send(firstEntry);
  } catch (error) {
    res.status(400).send(error);
  }
});

//GET ALL USER
router.get("/api/users", async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).send(users);
  } catch (error) {
    res.status(500).send(error);
  }
});

//GET SINGLE USER
router.get("/api/users/:id", async (req, res) => {
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
router.patch("/api/users/:id", async (req, res) => {
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
router.delete("/api/users/:id", async (req, res) => {
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

//GET STATUS
router.get("/api/status/:id", async (req, res) => {
  const _id = req.params.id;
  try {
    const user = await User.findOne({ _appId: _id });
    if (!user) {
      return res.status(404).send("User not found");
    }
    res.status(200).send(user);
  } catch (error) {
    res.status(500).send(error);
  }
});

//UPDATE STATUS
router.patch("/api/status/:id", async (req, res) => {
  const _id = req.params.id;
  const updates = req.body;

  try {
    const user = await User.findByIdAndUpdate(_id, updates, {
      new: true,
      runValidators: true,
    });
    console.log(user);
    if (!user) {
      return res.status(404).send("User not found");
    }
    res.status(200).send(user);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
