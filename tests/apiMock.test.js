jest.mock("axios");

const axios = require("axios");
const {
  testData,
  responseData,
  parsedXmltoJsonData,
  inputVehicleMakes,
} = require("./fixtures/TestData");

test("should fetch vehicletypes and parsexml", () => {
  const url =
    "https://vpic.nhtsa.dot.gov/api/vehicles/GetVehicleTypesForMakeId/570";
  axios.get.mockImplementation((url) =>
    Promise.resolve({ status: 200, data: { parsedXmltoJsonData } })
  );
});
