const productController = {};
const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../src/products.json');

productController.renderProduct = (req, res) => {
    fs.readFile(productsFilePath, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Error al cargar los productos.');
        }

        const products = JSON.parse(data);

        res.render('product', { title: 'Our Products', products });
    });
};


productController.renderProductDetail = (req, res) => {
    const productId = req.params.id; // Capturar el ID del producto desde la URL

    fs.readFile(productsFilePath, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Error al cargar los productos.');
        }

        const products = JSON.parse(data);
        const product = products.find(prod => prod.id === parseInt(productId));

        if (product) {
            res.render('productDetail', { title: 'Product Detail', product });
        } else {
            res.status(404).render('404', { title: 'Page Not Found' });
           // res.status(404).render('notFound', { title: 'Page Not Found' });
        }
    });
};

module.exports = productController;
