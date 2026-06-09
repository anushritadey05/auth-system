const express = require("express");
const pool = require("./db/db");
const authRoutes = require("./routes/authRoutes");
const app = express();

app.use(express.json());
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("Auth Server Running");
});

app.get("/test-db", async (req, res) => {
  try {
    const result = await pool.query("SELECT NOW()");
    res.json(result.rows);
  } catch (error) {
    console.log(error);
    res.status(500).send("Database Error");
  }
});

module.exports = app;