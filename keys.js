console.log('this is loaded');
var mysql = require("mysql");

exports.serveOne = mysql.createConnection({
        host: "localhost",
      
        port: 3306,
      
        user: "root",
      
        password: "",
        database: "bamazon_db"
      });