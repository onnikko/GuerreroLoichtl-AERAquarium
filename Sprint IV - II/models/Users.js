const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Importa la instancia de Sequelize que configuraste

// Define el modelo de usuarios
const Usuario = sequelize.define('usuarios', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  fullname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true, // Asegura que el email sea único
    validate: {
      isEmail: true, // Valida el formato del email
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// Sincroniza el modelo con la base de datos (creará la tabla si no existe)
Usuario.sync()
  .then(() => console.log('Modelo de usuarios sincronizado con la base de datos.'))
  .catch((error) => console.error('Error al sincronizar el modelo de usuarios:', error));

module.exports = Usuario;
