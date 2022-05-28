import express from "express";
import dotenv from "dotenv";
import path from "path";

import { createRequire } from "module";
const require = createRequire(import.meta.url);
const invoices = require("./data/data.json");

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.get("/invoices", (req, res) => {
  res.json(invoices);
});

app.get("/invoices/:id", (req, res) => {
  const invoice = invoices.find((invoice) => invoice._id === req.params.id);
  res.json(invoice);
});

const __dirname = path.resolve();
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/build")));
  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running");
  });
}

app.listen(
  port,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${port}`)
);
