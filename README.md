BAMAZON

A CLI store application that allows you to check inventory, select product, confirm price, and initiate purchase. The application is connected to a MySQL database and tracks inventory.
The user reviews and selects product, then enters the quantity they would like. Should stock be available, the purchase is allowed.  If no stock is available or quatity to be purchased is greater than the standing inventory, the purchase is not allowed. 

On successful checkout, the quantity purchased will be deducted from the inventory in the database and saved.

To start application, connect to server and run node bamazon.js in the terminal.
![Image of app run](https://raw.githubusercontent.com/rcorojr/bamazon/master/appImages/appStart.jpg)

Select how you want to interact with app.
![Image of buy decision](https://raw.githubusercontent.com/rcorojr/bamazon/master/appImages/buyOption.jpg)

Selecting buy option.
![Image of buy option](https://raw.githubusercontent.com/rcorojr/bamazon/master/appImages/qtyCheck.jpg)
Presented with database inventory inclulding product ID, product, department, and price.
When scrolling up and down with keys, the product ID appears in the answer space below.

Selecting a product.
![Image after selecting product](https://raw.githubusercontent.com/rcorojr/bamazon/master/appImages/enteredQty.jpg)
You are then prompted with how many of each

At this point, no further action runs as the logic for checking inventory is not finished. 

Future updates:
The Inventory option on run is to be fleshed out to grant a simplified "manager" view of inventory.
The Admin panel will break out into a greater decision tree to either see all inventory data, allow search for product, update inventory and products, create and delete products, among other admin priviliges.