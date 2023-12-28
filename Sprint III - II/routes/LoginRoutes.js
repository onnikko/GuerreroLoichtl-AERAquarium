const express = require('express');
const router = express.Router();
const loginController = require('../controllers/loginController');

// Ruta para la página de inicio de sesión
router.get('/', loginController.renderLogin); 

module.exports = router;
