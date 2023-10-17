const express = require("express");
const router = express.Router();
const {
  GET_ALL_CARS,
  ADD_CAR,
  GET_CAR_BY_ID,
  DELETE_CAR,
} = require("../controller/cars");

router.get("/cars", GET_ALL_CARS);

router.get("/cars/:id", GET_CAR_BY_ID);

router.post("/cars", ADD_CAR);

router.delete("/cars/:id", DELETE_CAR);

module.exports = router;
