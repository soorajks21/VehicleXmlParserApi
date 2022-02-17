const xml2js = require("xml2js");
const axios = require("axios");

const convertXmltoJson = async (data) => {
  try {
    const response = await xml2js
      .parseStringPromise(data, { mergeAttrs: true, normalize: true })
      .then((result) => {
        result.Response?.SearchCriteria &&
          result.Response.Results.push({
            makeId: addSearchCriteria(result.Response.SearchCriteria[0]),
          });

        result.Response?.Count &&
          result.Response.Results.push({ count: result.Response.Count[0] });

        return result.Response.Results;
      });
    return response;
  } catch (err) {
    return err;
  }
};

const vehicleMakes = (allVehicleMakes) => {
  const api_url = process.env.vehicleType_api;
  const makes = allVehicleMakes.map((vehicle) => {
    return {
      makeId: vehicle.Make_ID[0],
      makeName: vehicle.Make_Name[0],
      vehicleTypeFetchStatus: false,
      vehicleTypeUrl: `${api_url}${vehicle.Make_ID[0]}`,
    };
  });
  return makes;
};

const fetchVehicleMake = (apiCount, dbCount) => {
  return apiCount != dbCount;
};

const addSearchCriteria = (searchTxt) => {
  let id = searchTxt.match(/\d/g);
  return id.join("");
};

const totalDataFetched = (makesCount, typesCount) => {
  return makesCount + typesCount;
};

const parseVehicleTypesToJson = async (xmlVehicleTypes) => {
  let vehicleTypePromises = [];
  xmlVehicleTypes.map((details) => {
    vehicleTypePromises.push(
      axios
        .get(`${details.vehicleTypeUrl}`)
        .then((data) => convertXmltoJson(data.data))
    );
  });

  const vehicleDetails = await Promise.allSettled(vehicleTypePromises);

  return vehicleDetails;
};

const getVehicleDetails = (vehicleDetails) => {
  let updatedId = [];
  let createVehicleTypes = []
   vehicleDetails.forEach((items) => {
    if (items.status == "fulfilled") {
      updatedId.push(items.value[1].makeId);
      const arr = items?.value[0]?.VehicleTypesForMakeIds
        ? items.value[0].VehicleTypesForMakeIds.reduce((acc, curr) => {
            acc.push({
              typeId: curr.VehicleTypeId[0],
              typeName: curr.VehicleTypeName[0],
            });
            return acc;
          }, [])
        : [];

      createVehicleTypes.push({ vehicle: arr, makeId: items.value[1].makeId });
    }
   });
  
  return createVehicleTypes.length > 0  ? [updatedId, createVehicleTypes] : [false, false];
};

module.exports = {
  convertXmltoJson,
  vehicleMakes,
  fetchVehicleMake,
  totalDataFetched,
  parseVehicleTypesToJson,
  getVehicleDetails,
};
