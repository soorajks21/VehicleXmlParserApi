const mongoose = require("mongoose");

const TypeOfVehicleSchema = new mongoose.Schema({
  _id: {
    type: String,
  },
  vehicleTypes: [{}],
});

module.exports = mongoose.model("TypeOfVehicle", TypeOfVehicleSchema);
