const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');

// Ruta para la página de inicio
router.get('/', homeController.renderHome);

module.exports = router;
