const loginController = {};

loginController.renderLogin = (req, res) => {
    res.render('login', { title: 'Página de login' });
};

module.exports = loginController;
