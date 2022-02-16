const axios = require("axios");
const {
  convertXmltoJson,
  vehicleMakes,
  fetchVehicleMake,
  totalDataFetched,
  parseVehicleTypesToJson,
  getVehicleDetails,
} = require("../Utility/HelperFunctions");
const {
  insertVehicleMakes,
  getVehicles,
  getVehicleMakes,
  getVehilceCount,
  updateVehicleFetchStatus,
  removeVehicles,
} = require("../repositories/VehicleMakeRepository");

const {
  insertVehicleTypes,
  getVehicleTypesCount,
} = require("../repositories/VehicleTypesRepository");

const mcache = require("memory-cache");

const fetchVehicleMakeService = async () => {
  try {
    const api_url = process.env.vehicle_api;

    const response = await axios
      .get(api_url)
      .then((data) => convertXmltoJson(data.data));

    const apiCount = response[1].count;
    const vehicleDbCount = await getVehilceCount();
    const isFetch = fetchVehicleMake(apiCount, vehicleDbCount);
    if (isFetch) {
      vehicleDbCount > 0 && removeVehicles();
      const makes = vehicleMakes(response[0].AllVehicleMakes);
      await insertVehicleMakes(makes);
    }
    return true;
  } catch (err) {
    const error = {
      msg: "Unable to fectch vehicle makes",
      err,
    };
  }
};

const FetchVehicleTypes = async () => {
  try {
    const makeDetails = await getVehicleMakes();
    if (makeDetails.length > 0) {
      const vehicleDetails = await parseVehicleTypesToJson(makeDetails);
      const [updatedId, createVehicleTypes] = getVehicleDetails(vehicleDetails);
      const isSuccess = await insertVehicleTypes(createVehicleTypes);
      isSuccess && updateVehicleFetchStatus(updatedId);
    } else {
      return false;
    }
  } catch (err) {
    const error = {
      msg: "Unable to fectch vehicle types",
      err,
    };
  }
};

const FetchVehicles = async (req, res, next) => {
  let makesCount = await getVehilceCount();
  let typesCount = await getVehicleTypesCount();
  let count = totalDataFetched(makesCount, typesCount);
  try {
    let key = "__express__" + count + req.originalUrl || req.url;
    let cachedBody = mcache.get(key);

    if (cachedBody) {
      return cachedBody;
    } else {
      const vehicles = getVehicles();
      mcache.put(key, vehicles);

      return vehicles;
    }
  } catch (err) {}
};

module.exports = { fetchVehicleMakeService, FetchVehicleTypes, FetchVehicles };
