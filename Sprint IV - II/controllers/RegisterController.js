const { body, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const User = require('../models/Users'); // Importa el modelo de Usuario desde Sequelize

const registerController = {};

registerController.renderRegister = (req, res) => {
    res.render('register', { title: 'Página de registro' });
};

const registerValidationRules = [
    body('fullname').notEmpty().withMessage('El nombre completo es obligatorio'),
    body('email').isEmail().withMessage('Debe ingresar un correo electrónico válido'),
    body('password').isLength({ min: 6 }).withMessage('La contraseña debe tener al menos 6 caracteres')
];

const validate = (req, res, next) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
        return next();
    }
    res.render('register', { title: 'Página de register', errors: errors.array() });
};

registerController.registerUser = async (req, res) => {
    const { fullname, email, password } = req.body;

    try {
        // Hashear la contraseña
        const hashedPassword = await bcrypt.hash(password, 10);

        // Crear un nuevo usuario en la base de datos
        await User.create({
            fullname,
            email,
            password: hashedPassword
        });

        res.redirect('/login'); // Redirigir después de un registro exitoso
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al registrar al usuario.');
    }
};

module.exports = { registerController, registerValidationRules, validate };
