const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Configuración para servir archivos estáticos en la carpeta 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Rutas GET para cada una de las vistas
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'home.html'));
  });

app.get('/detalle-producto', (req, res) => {
  res.send('Estoy en Detalle de Producto');
});

app.get('/inicio-sesion', (req, res) => {
  res.send('Estoy en Inicio de Sesión');
});

app.get('/registrarme', (req, res) => {
  res.send('Estoy en Registrarme');
});

app.get('/carrito', (req, res) => {
  res.send('Estoy en Carrito');
});

// Inicia el servidor
app.listen(PORT, () => {
  console.log(`Servidor Express corriendo en el puerto ${PORT}`);
});
