const productController = {};
const Product = require('../models/Products'); // Importa el modelo de Producto desde Sequelize

productController.renderProduct = async (req, res) => {
    try {
        const products = await Product.findAll(); // Consulta todos los productos desde la base de datos

        res.render('product', { title: 'Our Products', products });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al cargar los productos.');
    }
};

productController.renderProductDetail = async (req, res) => {
    const productId = req.params.id; // Capturar el ID del producto desde la URL

    try {
        const product = await Product.findByPk(productId); // Buscar un producto por su ID en la base de datos

        if (product) {
            res.render('productDetail', { title: 'Product Detail', product });
        } else {
            res.status(404).render('404', { title: 'Page Not Found' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al cargar el detalle del producto.');
    }
};

module.exports = productController;
