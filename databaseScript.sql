create database InsuranceApp;

use database InsuranceApp;

-- Create a table for storing user details
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    age INT NOT NULL
);

-- Create a table for storing insurance quotes
CREATE TABLE quotes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    home_premium DECIMAL(10, 2),
    auto_premium DECIMAL(10, 2),
    FOREIGN KEY (user_id) REFERENCES users(id)
);
