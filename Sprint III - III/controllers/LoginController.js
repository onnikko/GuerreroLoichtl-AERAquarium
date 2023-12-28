const loginController = {};
const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt');
const { body, validationResult } = require('express-validator');

// Ruta del archivo JSON de usuarios
const usersFilePath = path.join(__dirname, '../src/users.json');

loginController.renderLogin = (req, res) => {
    res.render('login', { title: 'Página de login' });
};

const loginValidationRules = [
    // Agrega reglas de validación para cada campo del formulario
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
    (req, res) => {
        const { email, password } = req.body;

        // Carga la lista de usuarios desde el archivo JSON
        const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf8'));

        // Encuentra al usuario por su correo electrónico
        const user = users.find((user) => user.email === email);

        if (!user) {
            res.render('login', { title: 'Página de login', errors: [{ msg: 'Usuario no encontrado' }] });
            return;
        }

        // Compara la contraseña ingresada con la contraseña hasheada almacenada
        bcrypt.compare(password, user.password, (err, result) => {
            if (err || !result) {
                res.render('login', { title: 'Página de login', errors: [{ msg: 'Credenciales inválidas' }] });
                return;
            }


            // Establecer la cookie con la información del usuario
            res.cookie('userData', { email: user.email, id: user.id }, { maxAge: 900000, httpOnly: true });

            // Redirigir al usuario a la página principal después del inicio de sesión exitoso
            res.redirect('/');
        });
    }
];

module.exports = loginController;
