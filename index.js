require('dotenv').config();
const React = require('react');
const express = require('express');
const app = express();
const opn = require('open'); 
const header = require("./header");

app.use("/header", header); 

PORT = process.env.PORT;


app.listen(PORT, () => console.log(`=== Starting your app on http://localhost:${PORT} ===`));
opn(`http://localhost:${PORT}`);


module.exports = app;

