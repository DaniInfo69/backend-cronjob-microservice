const express = require('express');
const cors = require('cors');
require('dotenv').config();
const connection = require('./config/db'); // ✅ importa la conexión

const app = express();

// Middlewares (deben ir antes de las rutas)
app.use(cors());
app.use(express.json());

// Rutas
const actividadRoutes = require('./routes/actividad');
app.use('/api', actividadRoutes(connection)); // ✅ pásala aquí

// Ruta de prueba
app.get('/', (req, res) => {
    res.json({ message: 'Servidor funcionando 🚀' });
});

// Puerto
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
