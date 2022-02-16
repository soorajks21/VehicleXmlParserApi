const express = require("express");
const router = express.Router();
const { GetVehicleMakes } = require("../controllers/VehicleController");

const api_point = process.env.API_POINT;

router.get(`${api_point}` + "/", GetVehicleMakes, (error, req, res, next) => {
  res.status(400).send({ error: error.message });
});

module.exports = router;
