USE naybo_db;

INSERT INTO Users (name,user_name,password,email,city,state,createdAt,updatedAt) 
VALUES ('Miranda','mirwoz','password','miranda@gmail.com','Portsmouth','NH',NOW(),NOW()),
('Kelly', 'kad1001', 'password', 'kelly@gmail.com', 'Portsmouth', 'NH', NOW(),NOW()),
('Jennifer','jennrgin','password','jennifer@gmail.com','Manchester','NH', NOW(),NOW()),
('Worthy','theworthyg','password','worthy@gmail.com','Portsmouth','NH', NOW(),NOW()),
('Eric','sullyseipold','password','eric@gmail.com','Portsmouth','NH', NOW(),NOW());

INSERT INTO Items (item_name,price,description,image_url,createdAt,updatedAt,UserId) 
VALUES ('Lamp',5.00,'a really great lamp','www.google.com',NOW(),NOW(),1),
('chainsaw', 10.00, 'for making horror movies', 'www.google.com', NOW(),NOW(),3),
('12 foot ladder', 3.00, 'this ladder is very tall', 'www.google.com', NOW(),NOW(),5);

INSERT INTO Rentals (start_date,end_date,createdAt,updatedAt,ItemId,UserId) 
VALUES (20190331,20190402,NOW(),NOW(),1,1);
