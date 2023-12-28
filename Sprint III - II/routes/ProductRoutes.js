const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Ruta para la página de inicio de sesión
router.get('/', productController.renderProduct); 

module.exports = router;
