const mongoose = require("mongoose");

const VehicleMakeSchema = new mongoose.Schema({
  makeId: {
    type: String,
  },
  makeName: {
    type: String,
  },
  vehicleTypeFetchStatus: {
    type: Boolean,
  },
  vehicleTypeUrl: {
    type: String,
  },
});

module.exports = mongoose.model("VehicleMake", VehicleMakeSchema);
