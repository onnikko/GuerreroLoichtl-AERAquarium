const express = require('express');
const router = express.Router();
const { registerController, registerValidationRules, validate } = require('../controllers/registerController');

// Ruta para la página de inicio de sesión
router.get('/', registerController.renderRegister); 

// Ruta para manejar la solicitud POST del formulario de registro
router.post('/', registerValidationRules, validate, registerController.registerUser);

module.exports = router;
