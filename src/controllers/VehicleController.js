const {
  fetchVehicleMakeService,
  FetchVehicleTypes,
  FetchVehicles,
} = require("../services/VehicleService");

const GetVehicleMakes = async (req, res) => {
  const vehicleMakes = await FetchVehicleTypes(req, res).then((data) => data);
  if (vehicleMakes) {
    res.status(200).send(vehicleMakes);
  } else {
    res.status(400).send({ msg: "unable to process request" });
  }
};

module.exports = { GetVehicleMakes };
