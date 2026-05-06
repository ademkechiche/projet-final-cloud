const express = require("express");
const cors = require("cors");
const mysql = require("mysql2/promise");

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 3000;

app.get("/health", (req, res) => {
  res.status(200).send("OK");
});

app.get("/api", (req, res) => {
  res.json({ message: "Backend is working behind ALB" });
});

app.get("/", (req, res) => {
  res.send("Backend private EC2 is working");
});

app.get("/db-test", async (req, res) => {
  try {
    res.json({ status: "db route working" });
  } catch (error) {
    res.json({ error: "ignored" });
  }
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Backend running on port ${PORT}`);
});