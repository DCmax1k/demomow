const express = require("express");
const app = express();
const mongoose = require("mongoose");
require('dotenv').config();
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + "/client/build"));
app.use(cookieParser());

// DB models

// Main route
app.get('/', (req, res) => {
    res.sendFile(__dirname + "/client/build/index.html");
});
app.get('/mow', (req, res) => {
    res.sendFile(__dirname + "/client/build/index.html");
});
app.get('/tree', (req, res) => {
    res.sendFile(__dirname + "/client/build/index.html");
});
// Routes

// Server port
app.listen(process.env.PORT || 80, () => {
    console.log("Server listening on port 80");
});

// Connect to DB
