
var inquirer = require("inquirer");
var keys = require("./keys");
// const { start } = require("repl");

var connection = keys.serveOne

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
          goBuy();
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

  function goBuy() {
    connection.query("SELECT * FROM products", function(err, results) {
      if (err) throw err;
      for (var i=0; i < results.length; i++){
      console.log("Product ID: " + results[i].item_id + " || Product: " + results[i].product_name + " || Department: " + results[i].department_name + " || Price: " + results[i].price);
      };
      inquirer
        .prompt([
          {
            name: "choice",
            type: "rawlist",
            choices: function() {
              var choiceArray = [];
              for (var i = 0; i < results.length; i++) {
                choiceArray.push(results[i].product_name);
              }
              return choiceArray;
            },
            message: "Please select the Product ID you would like to purchase..."
          },
          {
            name: "productID",
            type: "input",
            message: "What is the Product ID you would like?"
          }
        ])
        .then(function(answer) {
          // get the information of the chosen item
          var chosenItem;
          for (var i = 0; i < results.length; i++) {
            if (results[i].item_name === answer.choice) {
              chosenItem = results[i];
            }
          }
  
          
        });
    });
};