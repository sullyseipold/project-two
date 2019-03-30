
DROP DATABASE IF EXISTS naybo_db;
CREATE DATABASE naybo_db;
USE naybo_db;

CREATE TABLE users (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    user_name VARCHAR(100) NOT NULL,
    password VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL,
    location VARCHAR(100) NOT NULL,
	PRIMARY KEY (id)
);


CREATE TABLE items 
(
    id int NOT NULL AUTO_INCREMENT,
    owner_id int NOT NULL,
    item_name varchar(200) NOT NULL,
    price decimal(5,2),
    description varchar(500) NOT NULL,
    image_url TEXT,
    PRIMARY KEY (id),
    FOREIGN KEY (owner_id) REFERENCES users(id)
);

CREATE TABLE rentals 
(
    id int NOT NULL AUTO_INCREMENT,
    item_id int NOT NULL,
    renter_id int NOT NULL,
    start_date DATE,
    end_date DATE,
    PRIMARY KEY (id),
    FOREIGN KEY (item_id) REFERENCES items(id),
    FOREIGN KEY (renter_id) REFERENCES users(id)

);
