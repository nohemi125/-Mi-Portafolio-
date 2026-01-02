const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* servir frontend */
app.use(express.static('frontend'));

/* rutas */
const routerComentarios = require('./backend/router_comentarios');
app.use('/api/comentarios', routerComentarios);

/* conexión Mongo */
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB conectado'))
  .catch(err => console.error(err));

/* servidor */
app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});
