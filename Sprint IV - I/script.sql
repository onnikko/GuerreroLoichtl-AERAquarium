-- Crear base de datos
CREATE DATABASE aervult;

-- Crear tabla de productos
CREATE TABLE productos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    detalle TEXT,
    precio DECIMAL(10, 2),
    stock INT,
    imagen VARCHAR(255)
);

-- Crear tabla de usuarios
CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    fullname VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);

-- INSERTAR USUARIOS EN LA TABA usuarios
INSERT INTO usuarios (fullname, email, password) VALUES ('onnika', 'onnikka.29@gmail.com', '$2b$10$xW.W3sFsRH1JM6uxWj727eUnp96y7HiWkmPgwDIyoqp7bS.S5ZUqC');

-- INSERTAR PRODUCTOS EN LA TABLA  productos
INSERT INTO productos (id, nombre, detalle, precio, stock, imagen) VALUES (1, 'Producto 1', 'Descripción del Producto 1', 20.99, 10, '/images/products/1.png');
INSERT INTO productos (id, nombre, detalle, precio, stock, imagen) VALUES (2, 'Producto 2', 'Descripción del Producto 2', 15.5, 20, '/images/products/2.png');
INSERT INTO productos (id, nombre, detalle, precio, stock, imagen) VALUES (3, 'Producto 3', 'Descripción del Producto 3', 30.0, 5, 'https://via.placeholder.com/300');
INSERT INTO productos (id, nombre, detalle, precio, stock, imagen) VALUES (4, 'Producto 4', 'Descripción del Producto 4', 50.25, 15, 'https://via.placeholder.com/300');
INSERT INTO productos (id, nombre, detalle, precio, stock, imagen) VALUES (5, 'Producto 5', 'Descripción del Producto 5', 10.0, 30, 'https://via.placeholder.com/300');
