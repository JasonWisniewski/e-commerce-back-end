-- DROP DATABASE
DROP DATABASE IF EXISTS ecommerce_db;

-- CREATE DATABASE
CREATE DATABASE ecommerce_db;


-- DROP TABLE IF EXISTS
-- DROP TABLE IF EXISTS
-- DROP TABLE IF EXISTS

-- CREATE TABLE category (
--   id INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
--   category_name VARCHAR(55) NOT NULL
-- );

-- CREATE TABLE product (
--   id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
--   product_name VARCHAR(55) NOT NULL,
--   -- need to validate price is a decimal
--   price DECIMAL(10, 2) NOT NULL,
--   -- need to validate that value is numeric
--   stock INT NOT NULL DEFAULT 10,
--   -- references category model's id
--   category_id INT ,
--   FOREIGN KEY (category_id) REFERENCES category(id)
-- );

-- CREATE TABLE tag (
--   id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
--   tage_name VARCHAR(100)
-- );

-- CREATE TABLE product_tag (
--   id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
--   product_id INT,
--   -- references the tag product model's id
--   FOREIGN KEY (product_id) REFERENCES product(id),
--   -- references the tag model's id
--   tag_id INT,
--   FOREIGN KEY (tag_id) REFERENCES tag(id)
-- );