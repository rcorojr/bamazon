DROP DATABASE bamazon_db;

CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products(
item_id INTEGER NOT NULL auto_increment PRIMARY KEY,
product_name VARCHAR(100) NOT NULL,
department_name VARCHAR(50) NOT NULL,
price DECIMAL(10,2) NOT NULL,
stock_quantity INTEGER(255),
rating INTEGER(5)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Cow bells", "instruments", 50, 330);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Bose head phones", "electronics", 900, 50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Cheese wheel", "Cheeses", 30, 250);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Llamas", "Exotic pets", 4000, 23);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Glenlivet", "Liquor", 40, 1000);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Gongs", "instruments", 120, 176);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Nitendo 64", "electronics", 250, 33);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Cheddar", "Cheeses", 50, 330);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Brie", "Cheeses", 50, 70);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Triangle", "instruments", 19, 800);