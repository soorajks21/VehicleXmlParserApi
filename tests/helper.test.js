const {
  convertXmltoJson,
  vehicleMakes,
  fetchVehicleMake,
  totalDataFetched,
  parseVehicleTypesToJson,
  getVehicleDetails,
} = require("../src/Utility/HelperFunctions");
const {
  testData,
  responseData,
  parsedXmltoJsonData,
  inputVehicleMakes,
} = require("./fixtures/TestData");



test("return object of makeId", () => {
  return parseVehicleTypesToJson(inputVehicleMakes).then((data) => {
    expect(data.length).toBeGreaterThan(0);
    data.forEach((fetch) => {
      expect(fetch.value[1]).toEqual(
        expect.objectContaining({
          makeId: '570'
        })
      );
    });
  });
});


test("return array of vehicleTypes", () => {
    const VehicleTypesForMakeIds = [
        {
            VehicleTypeId: ["1"],
            VehicleTypeName: ["Motorcycle"],
        },
    ];
  return parseVehicleTypesToJson(inputVehicleMakes).then((data) => {
    expect(data.length).toBeGreaterThan(0);
    data.forEach((fetch) => {
      expect(fetch.value[0]).toEqual(
          expect.objectContaining({
              VehicleTypesForMakeIds
          })
      );
    });
  });
});



// test('should fetch vehicletypes and parsexml', () => {
//     const url = "https://vpic.nhtsa.dot.gov/api/vehicles/GetVehicleTypesForMakeId/570";
//     axios.get.mockImplementation((url) => Promise.resolve({status: 200, data :{parsedXmltoJsonData}}))
  
// })