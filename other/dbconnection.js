var mysql=require('mysql');
var dbconfig = require('../config/database');

var dbconnection = mysql.createPool(dbconfig.connection);
 
module.exports = dbconnection;