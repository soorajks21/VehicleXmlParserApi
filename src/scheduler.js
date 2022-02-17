const cron = require("node-cron");

const {
  fetchVehicleMakeService,
  FetchVehicleTypes,
} = require("../src/services/VehicleService");

const cronJobs = () => {
  const getVehicleTypes = cron.schedule(
    "* * * * *",
    async () => {
      const isFetched = await FetchVehicleTypes();
      !isFetched && getVehicleTypes.stop();
    },
    {
      scheduled: false,
    }
  );

  const fetchVehicle = cron.schedule(
    "* */12 * * *",
    async () => {
      getVehicleTypes.stop();
      const value = await fetchVehicleMakeService();
      value && getVehicleTypes.start();
    },
    {
      scheduled: false,
    }
  );

  fetchVehicle.start();
};

module.exports = { cronJobs };
