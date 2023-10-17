const express = require("express");
const cors = require("cors");
require("dotenv").config();
const carsRouter = require("./routers/cars");

const app = express();
app.use(cors());
app.use(express.json());

app.use(carsRouter);
app.use((req, res) => {
  return res.status(404).json({ response: "Endpoint not exits" });
});

// eslint-disable-next-line no-undef
app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-undef
  console.log(`App started on port ${process.env.PORT}`);
});
