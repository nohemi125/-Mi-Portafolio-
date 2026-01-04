

let estrellasSeleccionadas = 0;

// Base de API (soporta file:// y localhost)
const API_BASE =
  window.location.hostname === 'localhost'
    ? 'http://localhost:3000'
    : 'https://mi-portafolio-production-a849.up.railway.app';

const comentarioForm = document.getElementById('comentarioForm');
const listaComentariosEl = document.getElementById('listaComentarios');
const prevComentariosBtn = document.getElementById('prevComentarios');
const nextComentariosBtn = document.getElementById('nextComentarios');
const comentarioSubmitBtn = comentarioForm?.querySelector('button[type="submit"]');


// Toast azul para feedback de formularios
const ensureToastContainer = () => {
  let container = document.getElementById('toastContainer');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toastContainer';
    document.body.appendChild(container);
  }
  return container;
};

function showToast(message) {
  const container = ensureToastContainer();
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast toast-info';
  toast.textContent = message;

  container.appendChild(toast);

  // Animar entrada en el siguiente frame para que la transición funcione
  requestAnimationFrame(() => toast.classList.add('visible'));

  setTimeout(() => {
    toast.classList.remove('visible');
    setTimeout(() => toast.remove(), 200);
  }, 2800);
}

document.querySelectorAll('.estrellas span').forEach(estrella => {
  estrella.addEventListener('click', () => {
    estrellasSeleccionadas = estrella.dataset.value;

    document.querySelectorAll('.estrellas span').forEach(e => {
      e.classList.toggle('activa', e.dataset.value <= estrellasSeleccionadas);
    });
  });
});

if (comentarioForm) {
  comentarioForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    await enviarComentario();
    if (window.lanzarConfetiPremium && comentarioSubmitBtn) {
      window.lanzarConfetiPremium(comentarioSubmitBtn);
    }
  });
} else {
  console.error(' No se encontró el formulario de comentarios');
}

const scrollComentarios = (direction) => {
  if (!listaComentariosEl) return;
  const cardWidth = listaComentariosEl.querySelector('.comentario')?.offsetWidth || 320;
  listaComentariosEl.scrollBy({ left: direction * (cardWidth + 16), behavior: 'smooth' });
};

prevComentariosBtn?.addEventListener('click', () => scrollComentarios(-1));
nextComentariosBtn?.addEventListener('click', () => scrollComentarios(1));

async function enviarComentario() {
  const nombre = document.getElementById('nombre')?.value.trim();
  const mensaje = document.getElementById('mensaje')?.value.trim();


  if (!nombre || !mensaje) {
    showToast('Completa tu nombre y comentario');
    return;
  }

  if (!estrellasSeleccionadas) {
    showToast('Selecciona una valoración');
    return;
  }

  const data = { nombre, mensaje, estrellas: Number(estrellasSeleccionadas) };

  try {
const res = await fetch(`${API_BASE}/api/comentarios`, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(data)
});


    if (!res.ok) {
      const errorText = await res.text().catch(() => '');
      console.error(' Error body', errorText);
      let errorData = {};
      try { errorData = JSON.parse(errorText); } catch (e) {}
      throw new Error(errorData.error || 'No se pudo enviar el comentario');
    }

    const saved = await res.json().catch(() => null);

    document.getElementById('comentarioForm').reset();
    estrellasSeleccionadas = 0;
    document.querySelectorAll('.estrellas span').forEach(e => e.classList.remove('activa'));
    await cargarComentarios();
  } catch (err) {
    console.error(err);
    alert(err.message || 'Error al enviar comentario');
  }
}

async function cargarComentarios() {
  try {
    const res = await fetch(`${API_BASE}/api/comentarios`);
    if (!res.ok) throw new Error('No se pudieron cargar los comentarios');
    const comentarios = await res.json();

    const lista = document.getElementById('listaComentarios');
    if (!lista) return;
    lista.innerHTML = '';

    comentarios.forEach(c => {
      lista.innerHTML += `
        <div class="comentario">
          <strong>${c.nombre}</strong>
           <p>${c.mensaje}</p>
          <div class="rating">${'★'.repeat(c.estrellas)}</div>
        </div>
      `;
    });
  } catch (err) {
    console.error(err);
  }
}
console.log('Form encontrado:', document.getElementById('comentarioForm'));

cargarComentarios();

// Auto-refresh comentarios cada 3 segundos
setInterval(() => {
  cargarComentarios();
}, 3000);
