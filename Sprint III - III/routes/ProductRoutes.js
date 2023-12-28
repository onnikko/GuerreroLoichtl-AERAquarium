const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Ruta para la página de inicio de sesión
router.get('/', productController.renderProduct); 

// Ruta para ver el detalle de un producto por su ID
router.get('/:id', productController.renderProductDetail);


module.exports = router;
