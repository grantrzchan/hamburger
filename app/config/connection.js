// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

//Dependencies
var Sequelize = require("sequelize");

//Creates mySQL connection with Sequelize
var sequelize = new Sequelize("hamburger_db","root","Rvhsrzrvhs123!",{
    host: "localhost",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
});

//Export the connection to the other files
module.exports = sequelize;