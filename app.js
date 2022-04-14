//---IMPORT---//
const express = require("express");
const app = express();


//---INIT---//
require('dotenv').config();


//---VARIABLE---//
const PORT = process.env.PORT;


//---MIDDLEWARE---//
app.use(express.static("public"));


//---MAIN---//
console.log("start on port " + PORT);

app.listen(PORT);