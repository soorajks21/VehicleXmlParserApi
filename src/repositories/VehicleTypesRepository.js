const TypeOfVehicle = require("../model/VehicleTypes");

const insertVehicleTypes = async (data) => {
  if (data) {
    const values = Promise.all(
      data.map(async (element) => {
       return await TypeOfVehicle.updateMany(
         { _id: element.makeId },
         { vehicleTypes: element.vehicle },
         { upsert: true }
       );
     })
   );
   const vehicleTypes = await values.then((data) => data).catch((err) => err);
   return vehicleTypes.length > 0 ? true : false;
  } else {
    return false;
  }
  
};

const getVehicleTypesCount = async () =>
  await TypeOfVehicle.count()
    .then((data) => data)
    .catch((err) => err);

module.exports = { insertVehicleTypes, getVehicleTypesCount };
