const homeController = {};

homeController.renderHome = (req, res) => {
    res.render('home', { title: 'Página de inicio', message: '¡Bienvenido a nuestra tienda en línea!' });
};

module.exports = homeController;
