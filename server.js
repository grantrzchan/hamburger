//Set up dependencies
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const methodOverride = require("method-override");


//Set up express

const app = express();
const PORT = process.env.PORT || 8000;
