const express = require('express');
const path = require('path');
const bodyParser = require('body-parser'); 
const cookieParser = require('cookie-parser');
const app = express();



// Requerir tus rutas
const homeRoutes = require('../routes/HomeRoutes');
const loginRoutes = require('../routes/LoginRoutes'); 
const cartRoutes = require('../routes/CartRoutes'); 
const productRoutes = require('../routes/ProductRoutes'); 
const registerRoutes = require('../routes/RegisterRoutes'); 


app.use(express.static(path.join(__dirname, '../public')));
app.use(cookieParser());
// Configuración de vistas y motor de plantillas
app.set('view engine', 'ejs');
//app.set('views', path.join(__dirname, 'views'));
app.set('views', path.join(__dirname, '..', 'views')); // Retrocede un directorio desde 'src' hacia 'expressjs' y luego a 'views'

// Configura body-parser para parsear el cuerpo de la solicitud como JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use('/', homeRoutes);
app.use('/login', loginRoutes); 
app.use('/register', registerRoutes); 
app.use('/cart', cartRoutes); 
app.use('/product', productRoutes); 


// Middleware para manejar rutas no encontradas (404)
app.use((req, res) => {
    res.status(404).render('404', { title: 'Página no encontrada' });
  });
  

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor iniciado en el puerto ${PORT}`);
});
