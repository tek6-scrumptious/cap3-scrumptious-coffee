use scrumptious_coffee_db;

-- CREATE TABLE users (
-- user_id int AUTO_INCREMENT PRIMARY KEY,
-- email varchar(255) not null, 
-- password varchar(255) not null
-- );

-- INSERT INTO users(email, password) values
-- ('jon@yahoo.com',
-- 'jon');
CREATE TABLE users (
user_id int AUTO_INCREMENT PRIMARY KEY,
email varchar(255) not null, 
password varchar(255) not null
);

INSERT INTO users(email, password) values
('jon@yahoo.com',
'jon');

SELECT * from users;

