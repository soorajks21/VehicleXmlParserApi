const cron = require("node-cron");

const {
  fetchVehicleMakeService,
  FetchVehicleTypes,
} = require("../src/services/VehicleService");

const cronJobs = () => {
  const getVehicleTypes = cron.schedule(
    "* * * * *",
    () => {
      FetchVehicleTypes();
    },
    {
      scheduled: false,
    }
  );

  const fetchVehicle = cron.schedule(
    "* */5 * * *",
    async () => {
      //fetchVehicleMakeService();
      getVehicleTypes.stop();
      const value = fetchVehicleMakeService();
      value && getVehicleTypes.start();
    },
    {
      scheduled: false,
    }
  );

  getVehicleTypes.start();
};

module.exports = { cronJobs };
