const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Importa la instancia de Sequelize que configuraste

// Define el modelo de producto
const Producto = sequelize.define('productos', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  detalle: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  precio: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  stock: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  imagen: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// Sincroniza el modelo con la base de datos (creará la tabla si no existe)
Producto.sync()
  .then(() => console.log('Modelo de productos sincronizado con la base de datos.'))
  .catch((error) => console.error('Error al sincronizar el modelo de productos:', error));

module.exports = Producto;
