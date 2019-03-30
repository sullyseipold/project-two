USE naybo_db;



INSERT INTO users (name,user_name,password,email,location) 
VALUES ('Miranda','mirwoz','password','miranda.wozmak@gmail.com','Portsmouth,NH');


INSERT INTO users (name,user_name,password,email,location) 
VALUES ('Jenn','JennG','password','Jen@gmail.com','Manchester,NH');


INSERT INTO items (owner_id,item_name,price,description,image_url) 
VALUES (1,'Lamp',5.00,'a very beautiful lamp','www.google.com');


INSERT INTO rentals (item_id,renter_id,start_date,end_date) 
VALUES (1,1,20190331,20190402);