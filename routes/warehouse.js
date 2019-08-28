const express = require("express");
const router = express.Router();
// const { check, validationResult } = require("express-validator/check");
const Warehouse = require("../Model/wareModel");

router.get("/", async (req, res) => {
  try {
    const warehouses = await Warehouse.find().sort({ date: -1 });
    res.json(warehouses);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route   POST api/warehouse
// @desc    warehouse location
// @access

router.post("/", async (req, res) => {
  //----pulling Data From Body--------
  const { name, area, lat, long } = req.body;

  try {
    const NewWarehouse = new Warehouse({
      name,
      area,
      lat,
      long
    });
    const warehouse = await NewWarehouse.save();
    res.json(warehouse);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
