const registerController = {};
const bcrypt = require('bcrypt');
const path = require('path');
const fs = require('fs');
const { body, validationResult } = require('express-validator');

const usersFilePath = path.join(__dirname, '../src/users.json');

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

registerController.registerUser = (req, res) => {
    bcrypt.hash(req.body.password, 10, (err, hashedPassword) => {
       
        if (err) {
            return res.status(500).send('Error al hashear la contraseña.');
        }

        const newUser = {
            fullname: req.body.fullname,
            email: req.body.email,
            password: hashedPassword
        };

        fs.readFile(usersFilePath, 'utf8', (readErr, data) => {
            if (readErr) {
                console.error(readErr);


                return res.status(500).send('Error al leer la base de datos de usuarios.');
            }

            let users = JSON.parse(data);
            users.push(newUser);

            fs.writeFile(usersFilePath, JSON.stringify(users, null, 2), (writeErr) => {
                if (writeErr) {
                    return res.status(500).send('Error al escribir en la base de datos de usuarios.');
                }
                res.redirect('/login');
                //res.status(200).send('¡Registro exitoso!');
            });
        });
    });
};

module.exports = { registerController, registerValidationRules, validate };
