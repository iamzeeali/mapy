const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WareSchema = mongoose.Schema({
  store: {
    type: Schema.Types.ObjectId,
    ref: "store"
  },
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
  }
});

module.exports = Warehouse = mongoose.model("warehouse", WareSchema);
