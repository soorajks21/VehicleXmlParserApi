const VehicleMake = require("../model/VehicleMakes");

const insertVehicleMakes = async (makes) =>
  await VehicleMake.insertMany(makes)
    .then((data) => data)
    .catch((err) => err);

const getVehicleMakes = async () =>
  await VehicleMake.find({ vehicleTypeFetchStatus: false }).limit(15);

const getVehilceCount = async () =>
  await VehicleMake.count()
    .then((data) => data)
    .catch((err) => err);

const updateVehicleFetchStatus = async (data) =>
  await VehicleMake.updateMany(
    { makeId: { $in: data } },
    {
      $set: { vehicleTypeFetchStatus: true },
    }
  );

const getVehicles = async () =>
  await VehicleMake.aggregate([
    {
      $lookup: {
        from: "typeofvehicles",
        localField: "makeId",
        foreignField: "_id",
        as: "groupVehicles",
      },
    },
    { $unwind: "$groupVehicles" },
    {
      $project: {
        _id: 0,
        makeId: "$makeId",
        makeName: "$makeName",
        vehicleTypes: "$groupVehicles.vehicleTypes",
      },
    },
  ])
    .then((data) => data)
    .catch((err) => err);

const removeVehicles = async () =>
  await VehicleMake.deleteMany({}, (err) => {
    if (err) {
      throw new Error("No record found");
    } else {
      return { msg: "deleted successfully" };
    }
  });

module.exports = {
  insertVehicleMakes,
  getVehicleMakes,
  getVehilceCount,
  updateVehicleFetchStatus,
  getVehicles,
  removeVehicles,
};
