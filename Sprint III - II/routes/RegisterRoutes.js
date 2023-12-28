const express = require('express');
const router = express.Router();
const registerController = require('../controllers/registerController');

// Ruta para la página de inicio de sesión
router.get('/', registerController.renderRegister); 

// Ruta para manejar la solicitud POST del formulario de registro
router.post('/', registerController.registerUser);

module.exports = router;
