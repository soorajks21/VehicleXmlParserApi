const express = require("express");
const { connectDB } = require("../config/database");
const router = require("./routers/vehicle_router");
const { notFound, errorHandler } = require("../middleware/errorMiddleware");

const server = express();
connectDB();

const cors = require("cors");

server.use(cors());
server.options("*", cors());

server.use(express.json());

server.use("/", router);

server.use(notFound);
server.use(errorHandler);

module.exports = server;
