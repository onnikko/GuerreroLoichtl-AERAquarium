const cartController = {};

cartController.renderCart = (req, res) => {
    res.render('cart', { title: 'Página de carrito' });
};

module.exports = cartController;
