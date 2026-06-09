const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const pool = require("../db/db");

const registerUser = async (req, res) => {

  try {

    const { username, email, password } = req.body;

    const userExists = await pool.query(
      "SELECT * FROM users WHERE email = $1",
      [email]
    );

    if (userExists.rows.length > 0) {

      return res.status(400).json({
        error: "User already exists"
      });

    }

    const salt = await bcrypt.genSalt(10);

    const hashedPassword = await bcrypt.hash(password, salt);

    await pool.query(
      `INSERT INTO users (username, email, password)
       VALUES ($1, $2, $3)`,
      [username, email, hashedPassword]
    );

    res.status(201).json({
      message: "User registered successfully"
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      error: "Server Error"
    });

  }

};

const generateToken = require("../utils/generateToken");

const loginUser = async (req, res) => {

  try {

    const { email, password } = req.body;

    const user = await pool.query(
      "SELECT * FROM users WHERE email = $1",
      [email]
    );

    if (user.rows.length === 0) {

      return res.status(400).json({
        error: "Invalid email or password"
      });

    }

    const validPassword = await bcrypt.compare(
      password,
      user.rows[0].password
    );

    if (!validPassword) {

      return res.status(400).json({
        error: "Invalid email or password"
      });

    }

    const token = generateToken(user.rows[0]);

    res.json({
      message: "Login successful",
      token
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      error: "Server Error"
    });

  }

};

module.exports = {
  registerUser,
  loginUser
};