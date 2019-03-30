-- CREATE DATABASE local_run;
-- USE local_run;

CREATE TABLE user 
(
    id int NOT NULL AUTO_INCREMENT,
	name varchar(50) NOT NULL,
    username varchar(50) NOT NULL,
    password varchar(50) NOT NULL,
    email varchar(100) NOT NULL,
    location varchar(100) NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE item 
(
    id int NOT NULL AUTO_INCREMENT,
    owner_id int NOT NULL,
    item_name varchar(200) NOT NULL,
    price decimal(5,2),
    description varchar(500) NOT NULL,
    image_url TEXT,
    PRIMARY KEY (id),
    FOREIGN KEY (owner_id) REFERENCES user(id)
);

CREATE TABLE rental 
(
    id int NOT NULL AUTO_INCREMENT,
    itemid int NOT NULL,
    renterid int NOT NULL,
    start_date DATE,
    end_date DATE,
    PRIMARY KEY (id),
    FOREIGN KEY (itemid) REFERENCES item(id),
);
