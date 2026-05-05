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

app.get("/db-test", async (req, res) => {
  try {
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER || "admin",
      password: process.env.DB_PASS,
      database: process.env.DB_NAME || "cloudapp"
    });

    const [rows] = await connection.execute("SELECT NOW() AS time");
    await connection.end();

    res.json({ database: "connected", time: rows[0].time });
  } catch (error) {
    res.status(500).json({ database: "error", message: error.message });
  }
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Backend running on port ${PORT}`);
});