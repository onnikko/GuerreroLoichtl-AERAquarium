const loginController = {};
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const User = require('../models/Users'); // Importa el modelo de Usuario desde Sequelize

loginController.renderLogin = (req, res) => {
    res.render('login', { title: 'Página de login' });
};

const loginValidationRules = [
    body('email').isEmail().withMessage('Debe ingresar un correo electrónico válido'),
    body('password').notEmpty().withMessage('La contraseña es obligatoria')
];

const validate = (req, res, next) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
        return next();
    }
    res.render('login', { title: 'Página de login', errors: errors.array() });
};

loginController.loginUser = [
    loginValidationRules,
    validate,
    async (req, res) => {
        const { email, password } = req.body;

        try {
            // Buscar al usuario por su correo electrónico en la base de datos
            const user = await User.findOne({ where: { email } });

            if (!user) {
                res.render('login', { title: 'Página de login', errors: [{ msg: 'Usuario no encontrado' }] });
                return;
            }

            // Comparar la contraseña ingresada con la contraseña almacenada en la base de datos
            const passwordMatch = await bcrypt.compare(password, user.password);

            if (!passwordMatch) {
                res.render('login', { title: 'Página de login', errors: [{ msg: 'Credenciales inválidas' }] });
                return;
            }

            // Establecer la cookie con la información del usuario
            res.cookie('userData', { email: user.email, id: user.id }, { maxAge: 900000, httpOnly: true });

            // Redirigir al usuario a la página principal después del inicio de sesión exitoso
            res.redirect('/');
        } catch (error) {
            console.error(error);
            res.status(500).send('Error al procesar la solicitud');
        }
    }
];

module.exports = loginController;
