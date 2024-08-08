CREATE DATABASE restopicker;

CREATE TABLE resto(
    resto_id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    count INTEGER DEFAULT 0
);