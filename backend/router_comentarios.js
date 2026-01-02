const express = require('express');
const router = express.Router();
const Comentario = require('./modelo_comentarios');

// Guardar comentario
router.post('/', async (req, res) => {
  console.log('🔥 POST RECIBIDO');
  console.log(req.body);
  try {
    console.log('📩 POST /api/comentarios body:', req.body);
    const nuevoComentario = new Comentario(req.body);
    await nuevoComentario.save();
    console.log('✅ Guardado comentario _id:', nuevoComentario._id);
    res.status(201).json(nuevoComentario);
  } catch (error) {
    console.error('❌ Error guardando comentario', error);
    res.status(400).json({ error: 'Error al guardar comentario' });
  }
});

// Obtener comentarios
router.get('/', async (req, res) => {
  try {
    const comentarios = await Comentario.find().sort({ fecha: -1 });
    console.log('📤 GET /api/comentarios ->', comentarios.length, 'items');
    res.json(comentarios);
  } catch (err) {
    console.error('❌ Error listando comentarios', err);
    res.status(500).json({ error: 'Error al obtener comentarios' });
  }
});

module.exports = router;
