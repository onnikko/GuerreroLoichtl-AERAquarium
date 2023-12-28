const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');

// Ruta para la página de inicio de sesión
router.get('/', cartController.renderCart); 

module.exports = router;
