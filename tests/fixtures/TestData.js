const testData = [
  {
    status: "fulfilled",
    value: {
      VehicleTypesForMakeIds: [
        {
          VehicleTypeId: ["2"],
          VehicleTypeName: ["Passenger Car"],
        },
        {
          VehicleTypeId: ["7"],
          VehicleTypeName: ["Multipurpose Passenger Vehicle (MPV)"],
        },
      ],
    },
  },
  {
    status: "fulfilled",
    value: {
      VehicleTypesForMakeIds: [
        {
          VehicleTypeId: ["2"],
          VehicleTypeName: ["Passenger Car"],
        },
        {
          VehicleTypeId: ["7"],
          VehicleTypeName: ["Multipurpose Passenger Vehicle (MPV)"],
        },
      ],
    },
  },
  {
    status: "fulfilled",
    value: {
      VehicleTypesForMakeIds: [
        {
          VehicleTypeId: ["2"],
          VehicleTypeName: ["Passenger Car"],
        },
        {
          VehicleTypeId: ["7"],
          VehicleTypeName: ["Multipurpose Passenger Vehicle (MPV)"],
        },
      ],
    },
  },
  {
    status: "fulfilled",
    value: {
      VehicleTypesForMakeIds: [
        {
          VehicleTypeId: ["2"],
          VehicleTypeName: ["Passenger Car"],
        },
        {
          VehicleTypeId: ["7"],
          VehicleTypeName: ["Multipurpose Passenger Vehicle (MPV)"],
        },
      ],
    },
  },
  {
    status: "fulfilled",
    value: {
      VehicleTypesForMakeIds: [
        {
          VehicleTypeId: ["7"],
          VehicleTypeName: ["Multipurpose Passenger Vehicle (MPV)"],
        },
      ],
    },
  },
  {
    status: "fulfilled",
    value: {
      VehicleTypesForMakeIds: [
        {
          VehicleTypeId: ["2"],
          VehicleTypeName: ["Passenger Car"],
        },
        {
          VehicleTypeId: ["7"],
          VehicleTypeName: ["Multipurpose Passenger Vehicle (MPV)"],
        },
      ],
    },
  },
  {
    status: "fulfilled",
    value: {
      VehicleTypesForMakeIds: [
        {
          VehicleTypeId: ["1"],
          VehicleTypeName: ["Motorcycle"],
        },
      ],
    },
  },
  {
    status: "fulfilled",
    value: {
      VehicleTypesForMakeIds: [
        {
          VehicleTypeId: ["1"],
          VehicleTypeName: ["Motorcycle"],
        },
      ],
    },
  },
  {
    status: "fulfilled",
    value: {
      VehicleTypesForMakeIds: [
        {
          VehicleTypeId: ["2"],
          VehicleTypeName: ["Passenger Car"],
        },
        {
          VehicleTypeId: ["3"],
          VehicleTypeName: ["Truck"],
        },
        {
          VehicleTypeId: ["7"],
          VehicleTypeName: ["Multipurpose Passenger Vehicle (MPV)"],
        },
        {
          VehicleTypeId: ["10"],
          VehicleTypeName: ["Incomplete Vehicle"],
        },
      ],
    },
  },
  {
    status: "fulfilled",
    value: {
      VehicleTypesForMakeIds: [
        {
          VehicleTypeId: ["2"],
          VehicleTypeName: ["Passenger Car"],
        },
        {
          VehicleTypeId: ["3"],
          VehicleTypeName: ["Truck"],
        },
        {
          VehicleTypeId: ["5"],
          VehicleTypeName: ["Bus"],
        },
        {
          VehicleTypeId: ["7"],
          VehicleTypeName: ["Multipurpose Passenger Vehicle (MPV)"],
        },
        {
          VehicleTypeId: ["10"],
          VehicleTypeName: ["Incomplete Vehicle"],
        },
      ],
    },
  },
];

const parsedXmltoJsonData = [
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
  },
];




const statusRejected = [
  {
    status: "rejected",
  }
];


const inputVehicleMakes = [
  {
    makeId: "570",
    makeName: "GENUINE SCOOTERS",
    vehicleTypeFetchStatus: false,
    vehicleTypeUrl:
      "https://vpic.nhtsa.dot.gov/api/vehicles/GetVehicleTypesForMakeId/570",
    __v: 0,
  },
];

const responseData = [
  {
    makeId: "440",
    makeName: "ASTON MARTIN",
    vehicleTypes: [
      {
        typeId: "2",
        typeName: "Passenger Car",
      },
      {
        typeId: "7",
        typeName: "Multipurpose Passenger Vehicle (MPV)",
      },
    ],
  },
  {
    makeId: "455",
    makeName: "HOMBILT TRAILERS",
    vehicleTypes: [
      {
        typeId: "6",
        typeName: "Trailer",
      },
    ],
  },
  {
    makeId: "470",
    makeName: "HOLDEN",
    vehicleTypes: [
      {
        typeId: "2",
        typeName: "Passenger Car",
      },
      {
        typeId: "7",
        typeName: "Multipurpose Passenger Vehicle (MPV)",
      },
    ],
  },
  {
    makeId: "485",
    makeName: "VOLVO",
    vehicleTypes: [
      {
        typeId: "2",
        typeName: "Passenger Car",
      },
      {
        typeId: "3",
        typeName: "Truck",
      },
      {
        typeId: "5",
        typeName: "Bus",
      },
      {
        typeId: "6",
        typeName: "Trailer",
      },
      {
        typeId: "7",
        typeName: "Multipurpose Passenger Vehicle (MPV)",
      },
      {
        typeId: "10",
        typeName: "Incomplete Vehicle",
      },
    ],
  },
];

module.exports = {
  testData,
  responseData,
  parsedXmltoJsonData,
  inputVehicleMakes,
  statusRejected,
};
