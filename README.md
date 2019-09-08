# bamazon

This app uses Node.js and MySQL to approximate an "Amazon-like" online store experience where items can be accounted for in a database by id, name, department, price, and stock quanitity and sold to customers who can view availability of products for sale in the terminal and place an order.

The bamazon app uses Node.js in the command line of your terminal and contains dependencies for `mysql`, and `inquierer` packages.


### Installing

To run this app, clone this app from the repo to your computer, go into the bamazaon file from your terminal, and run `npm install` to download the node dependencies mentioned above. 


# Screenshots

### Start App
To start the app, type in terminal: `node bamazonCustomer.js`.
![Start App](/assets/Start.png)

### Initial Display
Running the command `node bamazonCustomer.js` will return a table including the data for all available items for sale. User will be asked "What is the ID number of the item you would like to purchase?"
![Initial Display](/assets/InitialDisplay.png)

### Successful Purchase
Logging values for ID number of item you wish to purchase and the quantity for purchase will return the response, "You have successfully purchased <quantity> <items> which costs <dollars>."
![Successful Purchase](/assets/SuccessfulPurchase.png)

### Invalid ID
Logging invalid values for ID number of item you wish to purchase will return the response, "Please select a valid ID" and prompt the user to begin ordering process again.
![Invalid ID](/assets/InvalidID.png)

### Insufficient Quantity
Logging a value for quantity for purchase exceeding availability in the database will return the response, "Insufficient quanitity" and prompt the user to begin ordering process again.
![Insufficient Quantity](/assets/InsufficientQuantity.png)





The site for ths app is published at: https://fosfaine.github.io/bamazon/