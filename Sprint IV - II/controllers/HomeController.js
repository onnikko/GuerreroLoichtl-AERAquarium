const homeController = {};

homeController.renderHome = (req, res) => {
    const userData = req.cookies.userData; // Obtén la información de la cookie

    res.render('home', {
        title: 'Página de inicio',
        message: '¡Bienvenido a nuestra tienda en línea!',
        userData: userData // Pasa la información de la cookie a la vista
    });
};

module.exports = homeController;