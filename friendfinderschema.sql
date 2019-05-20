DROP DATABASE IF EXISTS friendfinder;
CREATE DATABASE friendfinder;

USE friendfinder;

CREATE TABLE products
(
    item_id INT NOT NULL
    AUTO_INCREMENT,
  name VARCHAR
    (100) NOT NULL,
  photo VARCHAR
    (45) NOT NULL,
  scores INT,
  PRIMARY KEY
    (item_id)
);

