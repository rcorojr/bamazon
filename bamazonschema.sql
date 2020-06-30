DROP DATABASE bamazon_db;

CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products(
id INTEGER NOT NULL auto_increment PRIMARY KEY,
item_name VARCHAR(100) NOT NULL,
category VARCHAR(50) NOT NULL,
prod_description VARCHAR(1000) NOT NULL,
price DECIMAL(10,2) NOT NULL,
rating INTEGER(5),
inventory INTEGER(255)
);