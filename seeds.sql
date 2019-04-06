DROP database if exists sequelize_naybo_db;
CREATE DATABASE sequelize_naybo_db;
USE sequelize_naybo_db;

INSERT INTO Users (name,user_name,password,email,city,state,createdAt,updatedAt) 
VALUES ('Miranda','mirwoz','password','miranda@gmail.com','Portsmouth','NH',NOW(),NOW()),
('Kelly', 'kad1001', 'password', 'kelly@gmail.com', 'Portsmouth', 'NH', NOW(),NOW()),
('Jennifer','jennrgin','password','jennifer@gmail.com','Manchester','NH', NOW(),NOW()),
('Worthy','theworthyg','password','worthy@gmail.com','Portsmouth','NH', NOW(),NOW()),
('Eric','sullyseipold','password','eric@gmail.com','Portsmouth','NH', NOW(),NOW());

INSERT INTO Items (name, price, description, imageurl, createdAt, updatedAt, availability) 
VALUES ('Lamp', 5.00, 'a really great lamp','www.google.com', NOW(),NOW(), true),
('chainsaw', 10.00, 'for making horror movies', 'www.google.com', NOW(),NOW(), true),
('12 foot ladder', 3.00, 'this ladder is very tall', 'www.google.com', NOW(),NOW(), true);

INSERT INTO Rentals (start_date,end_date,createdAt,updatedAt,ItemId,UserId) 
VALUES (20190331,20190402,NOW(),NOW(),1,1);
