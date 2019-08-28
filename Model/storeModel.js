const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StoreSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  area: {
    type: String,
    required: true
  },
  lat: {
    type: String
  },

  long: {
    type: String
  },
  wh: {
    type: String,
    required: true
  }
});

module.exports = Store = mongoose.model("store", StoreSchema);
