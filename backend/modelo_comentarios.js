const mongoose = require('mongoose');

const comentarioSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true
  },
  mensaje: {
    type: String,
    required: true
  },
  estrellas: {
    type: Number,
    required: true,
    min: 1,
    max: 5
  },
  fecha: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('comentario', comentarioSchema);
