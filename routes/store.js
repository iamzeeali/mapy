const express = require("express");
const router = express.Router();
const Store = require("../Model/storeModel");

// @route   GET api/store
// @desc    store location
// @access

router.get("/", async (req, res) => {
  const store = await Store.find(function(err, store) {
    if (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    } else {
      res.json(store);
    }
  });
});

// @route   POST api/store
// @desc    store location
// @access

router.post("/", async (req, res) => {
  const { name, area, lat, long, wh } = req.body;

  try {
    const newStore = new Store({
      name,
      area,
      lat,
      long,
      wh
    });
    const store = await newStore.save();
    res.json(store);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
