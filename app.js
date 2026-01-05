const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors()); // ⭐ permite peticiones desde cualquier dispositivo
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* servir frontend */
app.use(express.static('frontend'));

/* rutas */
const routerComentarios = require('./backend/router_comentarios');
app.use('/api/comentarios', routerComentarios);

/* conexión Mongo */
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB conectado'))
  .catch(err => console.error(err));

/* servidor */
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('Servidor corriendo en el puerto', PORT);
});
