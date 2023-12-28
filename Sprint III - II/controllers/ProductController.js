const productController = {};

productController.renderProduct = (req, res) => {
    res.render('product', { title: 'Página de producto' });
};

module.exports = productController;
