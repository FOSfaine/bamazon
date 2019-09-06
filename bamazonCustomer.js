var mysql = require("mysql");
var inquirer = require("inquirer");
require("console.table");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "SerenCae@aol.com2019",
    database: "bamazon_db"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    start();
});

function start() {
    console.log("Selecting all items available for sale...\n");

    connection.query("SELECT * FROM products", function (err, result) {
        if (err) throw err;
        console.table(result);
        //console.log(result);
        promptQuestions(result);
    })
}

function promptQuestions(inventory) {
    inquirer
        .prompt([{
            name: "purchaseItemID",
            type: "input",
            message: "What is the ID number of the item you would like to purchase?",
        }])
        .then(function (answer) {
            var productId = parseInt(answer.purchaseItemID);
            var product = checkForId(productId, inventory);
            if (product) {
                promptForQuantity(product);
            } else {
                console.log("please select a valid ID");
                start();
            }
        })
}

function promptForQuantity(product) {
    inquirer
        .prompt({
            name: "numberOfUnits",
            type: "input",
            message: "How many units of this item would you like?"
        })
        .then(function (answer) {
            var userQuantity = parseInt(answer.numberOfUnits);
            if (userQuantity > product.stock_quantity) {
                console.log("insufficient quantity");
                start();
            } else {
                makePurchase(product, userQuantity);
            }
        })
}

function makePurchase(product, userQuantity) {

    connection.query("UPDATE products SET stock_quantity = stock_quantity - ? WHERE ID = ?", [userQuantity, product.id], function (err, res) {
        if (err) throw err;
        console.log("You have successfully purchased " + userQuantity + " " + product.product_name + "which costs: " + " " + product.price * userQuantity);
        start();
    })

}

function checkForId(id, inventory) {
    for (var i = 0; i < inventory.length; i++) {
        if (inventory[i].id == id) {
            return inventory[i];
        }
    }
}