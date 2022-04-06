import express from "express";
import dotenv from "dotenv";

import { createRequire } from "module";
const require = createRequire(import.meta.url);
const invoices = require("./data/data.json");

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("API is running");
});

app.get("/invoices", (req, res) => {
  res.json(invoices);
});

app.get("/invoices/:id", (req, res) => {
  const invoice = invoices.find((invoice) => invoice._id === req.params.id);
  res.json(invoice);
});

app.listen(
  port,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${port}`)
);
