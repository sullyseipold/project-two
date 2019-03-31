USE naybo_db;

INSERT INTO Users (name,user_name,password,email,location,createdAt,updatedAt) 
VALUES ('Miranda','mirwoz','password','miranda.wozmak@gmail.com','Portsmouth,NH',NOW(),NOW());


INSERT INTO Users (name,user_name,password,email,location,createdAt,updatedAt) 
VALUES ('Jenn','JennG','password','Jen@gmail.com','Manchester,NH',NOW(),NOW());


INSERT INTO Items (item_name,price,description,image_url,createdAt,updatedAt,UserId) 
VALUES ('Lamp',5.00,'a really great lamp','www.google.com',NOW(),NOW(),1);


INSERT INTO Rentals (start_date,end_date,createdAt,updatedAt,ItemId,UserId) 
VALUES (20190331,20190402,NOW(),NOW(),1,1);
