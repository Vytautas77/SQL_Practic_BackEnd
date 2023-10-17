/* eslint-disable no-undef */
const db = require("../db");

const GET_ALL_CARS = async (req, res) => {
  try {
    const cars = await db.query("SELECT * FROM public.cars_table");

    return res.json({ cars: cars.rows });
  } catch (err) {
    console.log("ERROR: ", err);
    res.status(500).json({ response: "something went wrong" });
  }
};

const GET_CAR_BY_ID = async (req, res) => {
  try {
    const car = await db.query(
      `SELECT * FROM public.cars_table WHERE id= ${req.params.id}`
    );
    if (car.rows.length === 0) {
      return res.status(404).json({ response: "Car not found" });
    }
    return res.json({ car: car.rows[0] });
  } catch (err) {
    console.log("ERROR: ", err);
    res.status(500).json({ response: "something went wrong" });
  }
};

const ADD_CAR = async (req, res) => {
  try {
    const book = await db.query(`INSERT INTO public.cars_table(
        title, image, price, number_plates)
      VALUES ('${req.body.title}', '${req.body.image}', ${req.body.price}, '${req.body.number_plates}' )`);

    return res.status(201).json({ response: "Car was added", book });
  } catch (err) {
    console.log("ERROR: ", err);
    res.status(500).json({ response: "something went wrong" });
  }
};

const DELETE_CAR = async (req, res) => {
  try {
    const result = await db.query(
      `DELETE FROM public.cars_table WHERE id = ${req.params.id}`
    );
    if (result.rowCount === 0) {
      return res.status(404).json({ response: "Car not found" });
    }
    return res.json({ status: "Car was deleted" });
  } catch (err) {
    console.log("ERROR: ", err);
    res.status(500).json({ response: "Something went wrong" });
  }
};

module.exports = {
  GET_ALL_CARS,
  ADD_CAR,
  GET_CAR_BY_ID,
  DELETE_CAR,
};
