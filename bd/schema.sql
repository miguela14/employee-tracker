DROP DATABASE IF EXISTS tracker_bd;

CREATE DATABASE tracker_bd;

USE tracker_bd;

CREATE TABLE departments (
    id INIT NOT NULL,
    name VARCHAR(30) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE roles (
    id INIT NOT NULL,
    title VARCHAR(30),
    salary DECIMAL,
    depatments_id INIT,
    PRIMARY KEY (id)
);

CREATE TABLE employees (
    id INIT NOT NULL,
    first_name VARCHAR(30),
    last_name VARCHAR(30)
    role_id INIT,
    manager_id INIT,
    PRIMARY KEY (id)
);