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
  statusRejected
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


test('should return array of json data with id if vehicle type empty',  () => {
  const data = `<Response xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">
        <Count>0</Count>
        <Message>Response returned successfully</Message>
        <SearchCriteria>Make ID: 605</SearchCriteria>
        <Results />
    </Response>`
      
 

  return convertXmltoJson(data).then((item) => {
    expect(item.length).toBeGreaterThan(0);

    expect(item).toEqual(expect.arrayContaining(['', { makeId: '605' }, { count: '0' }]));

  })
})


test('should return an array of false value', () => {

  const data = getVehicleDetails(statusRejected);
      expect(data).toEqual(expect.arrayContaining([false, false]));
  
})


test('should return an array of  makeid and array of vehicle types', () => {
  const data = [
    {
      status: "rejected",
    },
    {
      status: "fulfilled",
      value: [
        {
          VehicleTypesForMakeIds: [
            {
              VehicleTypeId: ["1"],
              VehicleTypeName: ["Motorcycle"],
            },
          ],
        },
        {
          makeId: "570",
        },
        {
          count: "1",
        },
      ],
    }


  ];

  const result = getVehicleDetails(data);
  
  return expect(result).toEqual(expect.arrayContaining([["570"], [{"makeId": "570", "vehicle": [{"typeId": "1", "typeName": "Motorcycle"}]}]]))
});


