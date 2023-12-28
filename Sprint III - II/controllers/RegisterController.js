const registerController = {};

registerController.renderRegister = (req, res) => {
    res.render('register', { title: 'Página de registro' });
};



registerController.registerUser = (req, res) => {
    const { fullname, email, password } = req.body;
    if (!fullname || !email || !password) {
        return res.status(400).send('Por favor, completa todos los campos.');
    }
    bcrypt.hash(password, 10, (err, hashedPassword) => {
        if (err) {
            return res.status(500).send('Error al hashear la contraseña.');
        }

        const newUser = {
            fullname,
            email,
            password: hashedPassword // Guarda la contraseña hasheada
        };

        const usersFilePath = path.join(__dirname, '../src/users.json');
        fs.readFile(usersFilePath, 'utf8', (readErr, data) => {
            if (readErr) {
                return res.status(500).send('Error al leer la base de datos de usuarios.');
            }

            let users = JSON.parse(data); // Lee los usuarios actuales desde el archivo
            users.users.push(newUser); // Agrega el nuevo usuario a la lista de usuarios

            fs.writeFile(usersFilePath, JSON.stringify(users, null, 2), (writeErr) => {
                if (writeErr) {
                    return res.status(500).send('Error al escribir en la base de datos de usuarios.');
                }
                // Éxito: Usuario registrado correctamente
                res.status(200).send('¡Registro exitoso!');
            });
        });
    });
};

module.exports = registerController;
