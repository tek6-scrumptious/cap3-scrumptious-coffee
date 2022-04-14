use scrumptious_coffee_db;

CREATE TABLE admin_login(
admin_login_id int AUTO_INCREMENT PRIMARY KEY,
username varchar(255) not null, 
password varchar(255) not null
);

INSERT INTO admin_login(username,password) 
VALUES
('Rami', 'Tekbootcamp'),
('Alan','Tekbootcamp'),
('Dinah','Tekbootcamp'),
('Waleed','Tekbootcamp'),
('Michael','Tekbootcamp'),
('Joseph','Tekbootcamp'),
('Jonothan','Tekbootcamp');

SELECT * FROM admin_login;

