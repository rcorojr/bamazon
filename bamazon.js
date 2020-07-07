var mysql = require("mysql");
var inquirer = require("inquirer");
var keys = require("./keys");
const { start } = require("repl");

var connection = mysql.createConnection({
    host: "localhost",
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: "root",
  
    // Your password
    password: "",
    database: "bamazon_db"
  });

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    start();
});

function start() {
    inquirer
      .prompt({
        name: "options",
        type: "list",
        message: "Welcome to Bamazon!",
        choices: ["Buy", "Inventory", "Admin"]
      })
      .then(function(answer) {
        // based on their answer, either call the bid or the post functions
        if (answer.options === "Buy") {
          postBuy();
        }
        else if(answer.postOrBid === "Inventory") {
          checkInventory();
        } else if(answer.postOrBid === "Admin") {
            checkAdmin();
          }else{
          connection.end();
        }
      });
  }