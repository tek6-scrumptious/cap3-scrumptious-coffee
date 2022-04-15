use scrumptious_coffee_db;

CREATE TABLE orders (
order_id int AUTO_INCREMENT PRIMARY KEY,
user_id int,
time_stamp DATETIME DEFAULT CURRENT_TIMESTAMP,
total decimal(4,2),
FOREIGN KEY (user_id) REFERENCES users(user_id)
);

INSERT INTO orders (user_id, total) value(1,24.51);
select * from orders;