DROP DATABASE IF EXISTS bamazon_DB;
CREATE DATABASE bamazon_DB;

USE bamazon_DB;

CREATE TABLE products(
  id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100) NOT NULL,
  department_name VARCHAR(100) NOT NULL,
  price INT default 0,
  stock_quantity INT default 0,
  PRIMARY KEY (id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Solar Generator", "Appliances", 2,500.00, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Solar Panel", "Appliances", 750.00, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Portable Refrigerator", "Appliances", 300.00, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("King Lear", "Books", 18.25, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Hamlet", "Books", 13.99, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Romeo and Juliet", "Books", 8.50, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("T-Shirt white", "Clothing", 10.99, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("T-Shirt black", "Clothing", 10.99, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("T-Shirt red", "Clothing", 10.99, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("T-Shirt blue", "Clothing", 10.99, 100);
