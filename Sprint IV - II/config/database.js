const { Sequelize } = require('sequelize');

// Configuración de la conexión a la base de datos
const sequelize = new Sequelize('aervult', 'root', 'password', {
  host: 'localhost',
  dialect: 'mysql', // Puede variar según la base de datos que uses
});

// Prueba de conexión a la base de datos
async function testDatabaseConnection() {
  try {
    await sequelize.authenticate();
    console.log('Conexión establecida correctamente con la base de datos.');
  } catch (error) {
    console.error('No se pudo conectar a la base de datos:', error);
  }
}

testDatabaseConnection();

module.exports = sequelize;
