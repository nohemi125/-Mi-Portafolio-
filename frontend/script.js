console.log("JS ARRIBA");

// ====== SCROLLREVEAL - PROYECTOS ======
const sr = ScrollReveal({
  distance: '60px',
  duration: 900,
  easing: 'ease-out',
  reset: false  // No resetear para mantener elementos visibles
})

// Título
sr.reveal('.projects-title', {
  origin: 'top',
  reset: false
})

// Grid completo
sr.reveal('.proyectos-grid', {
  origin: 'bottom',
  delay: 200,
  reset: false  // Mantener visible al hacer scroll
})

// Cards una por una (efecto cascada)
// DESHABILITADO: ScrollReveal estaba ocultando tarjetas al hacer scroll hacia abajo
// sr.reveal('.proyectos-grid .card', {
//   origin: 'bottom',
//   interval: 150,
//   reset: false  // Evitar reset que causa problemas con filtrado
// })



// ====== SCROLLREVEAL - SKILLS ======
const srSkills = ScrollReveal({
  distance: '80px',
  duration: 900,
  easing: 'ease-out',
  reset: true 
})

// Título
srSkills.reveal('.herramientas-title', {
  origin: 'top'
})

// Texto descriptivo
srSkills.reveal('.skills > p', {
  origin: 'top',
  delay: 150
})

// Lenguajes (izquierda)
srSkills.reveal('.lenguajes', {
  origin: 'left',
  delay: 200
})

// Frameworks (derecha)
srSkills.reveal('.framework', {
  origin: 'right',
  delay: 200
})

// Bases de datos (abajo izquierda)
srSkills.reveal('.bases-datos', {
  origin: 'bottom',
  delay: 250
})

// Herramientas (abajo derecha)
srSkills.reveal('.skills .herramientas', {
  origin: 'bottom',
  delay: 350
})


// ====== SCROLLREVEAL - IDIOMAS ======
const srIdiomas = ScrollReveal({
  distance: '70px',
  duration: 850,
  easing: 'ease-out',
  reset: true //  se repite al hacer scroll
})

// Título
srIdiomas.reveal('.idiomas-title', {
  origin: 'top'
})

// Contenedor general
srIdiomas.reveal('.idiomas-container', {
  origin: 'bottom',
  delay: 300
})

// Cada idioma (cascada)
srIdiomas.reveal('.idioma', {
  origin: 'bottom',
  interval: 200
})




// ====== SCROLLREVEAL - SERVICIOS ======
const srServicios = ScrollReveal({
  distance: '70px',
  duration: 850,
  easing: 'ease-out',
  reset: true // 🔥 se repite al hacer scroll
})

// Título
srServicios.reveal('.servicios-title', {
  origin: 'top'
})

// Descripción
srServicios.reveal('.servicios-desc', {
  origin: 'bottom',
  delay: 200
})

// Grid general
srServicios.reveal('.servicios-grid', {
  origin: 'bottom',
  delay: 300
})

// Cada tarjeta (cascada)
srServicios.reveal('.servicio-card', {
  origin: 'bottom',
  interval: 200
})

srServicios.reveal('#card1, #card3, #card5', {
  origin: 'left',
  interval: 200
})

srServicios.reveal('#card2, #card4', {
  origin: 'right',
  interval: 200
})




// ====== SCROLLREVEAL - CURSOS ======
const srCursos = ScrollReveal({
  distance: '70px',
  duration: 850,
  easing: 'ease-out',
  reset: true // 
})

// Título
srCursos.reveal('.courses-title', {
  origin: 'top'
})

// Subtítulo
srCursos.reveal('.courses-subtitle', {
  origin: 'bottom',
  delay: 200
})

// Grid general
srCursos.reveal('.courses-grid', {
  origin: 'bottom',
  delay: 300
})

// Cada curso (cascada)
srCursos.reveal('.course-card', {
  origin: 'bottom',
  interval: 200
})

// ====== SCROLLREVEAL - CONTACTO ======
const srContacto = ScrollReveal({
  distance: '120px',
  duration: 1200,
  easing: 'cubic-bezier(.25,.8,.25,1)',
  reset: true
})

// TÍTULO – caída con fuerza
srContacto.reveal('.contacto-title', {
  origin: 'top',
  distance: '150px',
  scale: 0.8,
  opacity: 0,
})

// TEXTO – fade + blur feeling
srContacto.reveal('.contacto-desc, .contacto p:not(.contacto-desc)', {
  origin: 'bottom',
  distance: '60px',
  opacity: 0,
  delay: 300
})

// TARJETAS – WOW CINEMÁTICO
srContacto.reveal('.contacto-card', {
  origin: 'bottom',
  distance: '120px',
  rotate: { x: 20, z: -5 },
  scale: 0.85,
  opacity: 0,
  interval: 250
})




// ====AOS ANIMATIONS sesion2====
AOS.init({
    duration: 900,     // duración de la animación
    easing: 'ease-out',
    once: false        // se anima solo la primera vez
  });


// ====Particulas flotantes====
VANTA.NET({
  el: "#home",
  color: 0xa855f7,
  backgroundColor: 0x000000,
  points: 12.0,
  maxDistance: 20.0,
  spacing: 18.0
});


// PARTIVULAS FLOTANTES EN 3cer SECCION

document.addEventListener("DOMContentLoaded", () => {
  VANTA.DOTS({
    el: "#about-me",
    mouseControls: false,
    touchControls: false,
    gyroControls: false,

    color: 0x560bad,   // morado oscuro
    color2: 0x9a1686,  // morado rosado
    backgroundColor: 0x0b0614,

    size: 2.4,
    spacing: 45,

    showLines: false
  });
});


document.addEventListener("DOMContentLoaded", () => {
  VANTA.DOTS({
    el: "#herramientas",
    mouseControls: false,
    touchControls: false,
    gyroControls: false,

    // color: 0x560bad,   // morado oscuro
    // color2: 0x9a1686,  // morado rosado
    backgroundColor: 0x0b0614,

    size: 2.4,
    spacing: 45,

    showLines: false
  });
});

document.addEventListener("DOMContentLoaded", () => {
  VANTA.DOTS({
    el: "#Skills",
    mouseControls: false,
    touchControls: false,
    gyroControls: false,

    color: 0x560bad,   // morado oscuro
    color2: 0x9a1686,  // morado rosado
    backgroundColor: 0x0b0614,

    size: 2.4,
    spacing: 45,

    showLines: false
  });
});

// animacionde fondo solicita servicio
VANTA.NET({
  el: "#Contact",
  color: 0xa855f7,
  backgroundColor: 0x000000,
  points: 12.0,
  maxDistance: 20.0,
  spacing: 18.0
});







document.addEventListener("DOMContentLoaded", () => {

  /* ================================
     CONFETI PREMIUM AL ENVIAR
  ================================= */

  const confetiSound = document.getElementById("confetiSound")

  const lanzarConfetiPremium = (btn) => {
    if (!btn || !window.confetti) return

    const rect = btn.getBoundingClientRect()

    // 🔊 sonido
    if (confetiSound) {
      confetiSound.currentTime = 0
      confetiSound.volume = 0.4
      confetiSound.play().catch(() => {})
    }

    // ✨ confeti dorado premium
    confetti({
      particleCount: 160,
      spread: 80,
      startVelocity: 35,
      origin: {
        x: (rect.left + rect.width / 2) / window.innerWidth,
        y: rect.top / window.innerHeight
      },
      colors: ['#FFD700', '#FFC300', '#FFB703', '#FFF3B0'],
      shapes: ['circle', 'star'],
      scalar: 1.2,
      gravity: 0.9
    })
  }

  // función llamada desde el botón
  window.enviar = function (btn) {
    lanzarConfetiPremium(btn)
  }

  // exportar para otros eventos
  window.lanzarConfetiPremium = lanzarConfetiPremium


  /* ================================
     FUEGOS ARTIFICIALES DE FONDO
     (tsParticles)
  ================================= */

  const iniciarFuegosArtificiales = () => {
    console.log("🔥 iniciarFuegosArtificiales llamado")
    
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')
    const testimonioSection = document.querySelector('#Testimonio')
    
    if (!testimonioSection) {
      console.error("Sección Testimonio no encontrada")
      return
    }

    // Configurar canvas como fondo
    canvas.width = testimonioSection.offsetWidth
    canvas.height = testimonioSection.offsetHeight
    canvas.style.position = 'absolute'
    canvas.style.top = '0'
    canvas.style.left = '0'
    canvas.style.zIndex = '1'
    canvas.style.pointerEvents = 'none'
    
    testimonioSection.style.position = 'relative'
    testimonioSection.insertBefore(canvas, testimonioSection.firstChild)

    // Array de partículas
    let particles = []

    // Clase para partículas
    class Particle {
      constructor(x, y) {
        this.x = x
        this.y = y
        this.vx = (Math.random() - 0.5) * 12
        this.vy = (Math.random() - 0.5) * 12 - 5
        this.gravity = 0.15
        this.life = 1
        this.decay = Math.random() * 0.015 + 0.01
        this.size = Math.random() * 3 + 2
        
        // Colores de fuegos
        const colores = ['#FFD700', '#FFC300', '#FFB703', '#5050e3', '#a855f7', '#fca311']
        this.color = colores[Math.floor(Math.random() * colores.length)]
      }

      update() {
        this.vy += this.gravity
        this.x += this.vx
        this.y += this.vy
        this.life -= this.decay
      }

      draw(ctx) {
        ctx.fillStyle = this.color
        ctx.globalAlpha = this.life
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
        ctx.globalAlpha = 1
      }
    }

    // Función para crear explosión
    const crearExplosion = (x, y) => {
      for (let i = 0; i < 40; i++) {
        particles.push(new Particle(x, y))
      }
    }

    // Animar
    const animate = () => {
      // Limpiar canvas con fade
      ctx.fillStyle = 'rgba(11, 6, 20, 0.1)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Actualizar y dibujar partículas
      for (let i = particles.length - 1; i >= 0; i--) {
        particles[i].update()
        particles[i].draw(ctx)

        if (particles[i].life <= 0) {
          particles.splice(i, 1)
        }
      }

      requestAnimationFrame(animate)
    }

    // Lanzar fuegos cada 3 segundos desde diferentes puntos
    const lanzarFuegos = () => {
      const x = Math.random() * canvas.width
      const y = Math.random() * (canvas.height * 0.6) + canvas.height * 0.2
      
      // Explosión principal
      crearExplosion(x, y)
      
      // Explosiones secundarias
      setTimeout(() => {
        crearExplosion(x + 60, y - 30)
        crearExplosion(x - 60, y - 30)
      }, 150)
    }

    animate()
    
    // Iniciar fuegos
    lanzarFuegos()
    const intervalo = setInterval(lanzarFuegos, 3000)
    window.intervaloFuegos = intervalo

    // Redimensionar canvas al cambiar ventana
    window.addEventListener('resize', () => {
      canvas.width = testimonioSection.offsetWidth
      canvas.height = testimonioSection.offsetHeight
    })

    console.log("✅ Fuegos artificiales de fondo iniciados")
  }


  /* ================================
     OBSERVER (solo una vez)
  ================================= */

  const seccionFinal = document.querySelector("#Testimonio")
  let fuegosActivos = false

  if (seccionFinal) {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !fuegosActivos) {
            // Pequeño delay para asegurar que tsParticles esté listo
            setTimeout(() => {
              iniciarFuegosArtificiales()
            }, 500)
            fuegosActivos = true
          }
        })
      },
      { threshold: 0.3 }
    )

    observer.observe(seccionFinal)
  }

})






const menu = document.querySelector(".menu")
const toggle = document.getElementById("toggle")
const navbar = document.querySelector(".navbar")
const estrellas = document.querySelectorAll(".estrellas span")
let calificacion = 0
const chatbotBtn = document.getElementById("chatbotBtn")
const chatbotBox = document.getElementById("chatbotBox")
const closeChat = document.getElementById("closeChat")
const hero = document.querySelector(".hero")
const titleSpan = document.querySelector(".hero_title h1 span")

// Import Splide library
const Splide = window.Splide

toggle.addEventListener("click", () => {
  menu.classList.toggle("active")
})

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled")
  } else {
    navbar.classList.remove("scrolled")
  }
})

estrellas.forEach((estrella, index) => {
  estrella.addEventListener("click", () => {
    calificacion = index + 1
    actualizarEstrellas()
  })

  estrella.addEventListener("mouseenter", () => {
    estrellas.forEach((e, i) => {
      if (i <= index) {
        e.classList.add("active")
      } else {
        e.classList.remove("active")
      }
    })
  })
})



document.querySelector(".estrellas").addEventListener("mouseleave", () => {
  actualizarEstrellas()
})

function actualizarEstrellas() {
  estrellas.forEach((e, i) => {
    if (i < calificacion) {
      e.classList.add("active")
    } else {
      e.classList.remove("active")
    }
  })
}

chatbotBtn.addEventListener("click", function () {
  chatbotBox.classList.toggle("active")
  this.style.transform = chatbotBox.classList.contains("active") ? "scale(0.9)" : "scale(1)"
})

closeChat.addEventListener("click", () => {
  chatbotBox.classList.remove("active")
  chatbotBtn.style.transform = "scale(1)"
})

const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    // Solo agregar visible si el elemento NO está filtrado/oculto
    if (entry.isIntersecting && !entry.target.classList.contains("oculto")) {
      entry.target.classList.add("visible")
    }
  })
}, observerOptions)

// Agregar la clase fade-in a elementos que queremos animar
document.addEventListener("DOMContentLoaded", () => {
  const elementsToAnimate = document.querySelectorAll(".card, .servicio-card, .course-card, .idioma, .contacto-card")
  elementsToAnimate.forEach((el) => {
    el.classList.add("fade-in")
    observer.observe(el)
  })
})

const skillItems = document.querySelectorAll(".lenguajes ul li, .framework ul li")

const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const item = entry.target
      const percentage = item.querySelector("span")?.textContent
      if (percentage) {
        const width = percentage
        item.style.setProperty("--progress-width", width)
        setTimeout(() => {
          item.style.setProperty("width", "100%")
          const before = item.querySelector("::before")
          if (before) {
            item.querySelector("::before").style.width = width
          }
          // Aplicar el ancho usando la pseudo-clase
          item.style.background = `linear-gradient(90deg, rgba(199, 125, 255, 0.3) ${width}, rgba(199, 125, 255, 0.1) ${width})`
        }, 100)
      }
    }
  })
}, observerOptions)

skillItems.forEach((item) => {
  skillObserver.observe(item)
})

document.querySelectorAll('.menu a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      const offset = 90 // altura del navbar
      const targetPosition = target.offsetTop - offset
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      })

      // Cerrar menú móvil si está abierto
      if (window.innerWidth <= 768) {
        menu.classList.remove("active")
      }
    }
  })
})

if (titleSpan) {
  const text = titleSpan.textContent
  titleSpan.textContent = ""
  titleSpan.style.display = "inline-block"

  let i = 0
  function typeWriter() {
    if (i < text.length) {
      titleSpan.textContent += text.charAt(i)
      i++
      setTimeout(typeWriter, 100)
    }
  }

  setTimeout(typeWriter, 1000)
}

window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset
  if (hero) {
    hero.style.transform = `translateY(${scrolled * 0.5}px)`
  }
})

function animateValue(element, start, end, duration) {
  let startTimestamp = null
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp
    const progress = Math.min((timestamp - startTimestamp) / duration, 1)
    element.textContent = Math.floor(progress * (end - start) + start)
    if (progress < 1) {
      window.requestAnimationFrame(step)
    }
  }
  window.requestAnimationFrame(step)
}

const projectCards = document.querySelectorAll(".card")
projectCards.forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const rotateX = (y - centerY) / 20
    const rotateY = (centerX - x) / 20

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`
  })

  card.addEventListener("mouseleave", () => {
    card.style.transform = "perspective(1000px) rotateX(0) rotateY(0) translateY(0)"
  })
})

window.onload = () => {
  new Splide(".MySplide", {
    type: "loop",
    drag: "free",
    focus: "center",
    perPage: 2.5,
    gap: "2rem",
    pagination: false,
    breakpoints: {
      1400: {
        perPage: 2,
      },
      1200: {
        perPage: 1.5,
      },
      500: {
        perPage: 1,
      },
    },
  }).mount({ AutoScroll: window.splide.Extensions.AutoScroll })

  createSparkles()

  // Repetir destellos cada 5 segundos
  setInterval(createSparkles, 5000)
}

function createSparkles() {
  const sparkleCount = 30

  for (let i = 0; i < sparkleCount; i++) {
    setTimeout(() => {
      const sparkle = document.createElement("div")
      sparkle.className = "sparkle"
      sparkle.style.left = Math.random() * window.innerWidth + "px"
      sparkle.style.top = Math.random() * window.innerHeight + "px"
      sparkle.style.animationDelay = Math.random() * 0.5 + "s"

      document.body.appendChild(sparkle)

      setTimeout(() => {
        sparkle.remove()
      }, 1000)
    }, i * 50)
  }
}

const sections = document.querySelectorAll("section")
const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.animation = "fadeInUp 0.8s ease-out"
      }
    })
  },
  { threshold: 0.1 },
)

sections.forEach((section) => {
  sectionObserver.observe(section)
})

// Agregar keyframes para fadeInUp
const style = document.createElement("style")
style.textContent = `
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(50px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`
document.head.appendChild(style)


console.log("ANTES MODAL");

// ====== MODAL DE VIDEO Y CV ======
document.addEventListener('DOMContentLoaded', function() {
  console.log("DENTRO MODAL");

  const videoModal = document.getElementById('videoModal');
  const modalVideo = document.getElementById('modalVideo');
  const modalGif = document.getElementById('modalGif');
  const closeModal = document.querySelector('.close-modal');
  const playButtons = document.querySelectorAll('.play-btn');

  const resetMedia = () => {
    if (modalVideo) {
      const videoSource = modalVideo.querySelector('source');
      modalVideo.pause();
      modalVideo.currentTime = 0;
      if (videoSource) {
        videoSource.src = '';
      }
      modalVideo.load();
      modalVideo.style.display = '';
    }

    if (modalGif) {
      modalGif.src = '';
      modalGif.classList.remove('active');
      modalGif.style.display = 'none';
    }
  };

  // Abrir modal al hacer clic en botón de play
  playButtons.forEach(btn => {
    btn.addEventListener('click', function(e) {

      e.preventDefault();
      const videoSrc = this.dataset.video;
      const gifSrc = this.dataset.gif;

      resetMedia();

      if (gifSrc && modalGif) {
        modalVideo.style.display = 'none';
        modalGif.src = gifSrc;
        modalGif.style.display = 'block';
        modalGif.classList.add('active');
      } else if (videoSrc && modalVideo) {
        const videoSource = modalVideo.querySelector('source');
        if (videoSource) {
          videoSource.src = videoSrc;
        }
        modalVideo.load();
        modalVideo.play();
      }

      if (videoModal) {
        videoModal.classList.add('active');
      }
    });
  });

  // Cerrar modal al hacer clic en la X
  if (closeModal) {
    closeModal.addEventListener('click', function() {
      if (videoModal) {
        videoModal.classList.remove('active');
      }
      resetMedia();
    });
  }

  // Cerrar modal al hacer clic fuera del video
  if (videoModal) {
    videoModal.addEventListener('click', function(e) {
      if (e.target === videoModal) {
        videoModal.classList.remove('active');
        resetMedia();
      }
    });
  }

  // Cerrar modal con la tecla ESC
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && videoModal && videoModal.classList.contains('active')) {
      videoModal.classList.remove('active');
      resetMedia();
    }
  });

  // ====== MODAL DE CV ======
  console.log("Inicializando CV Modal");
  const cvModal = document.getElementById('cvModal')
  const cvFrame = document.getElementById('cvFrame')
  const cvDownload = document.getElementById('cvDownload')
  const openCvBtn = document.getElementById('openCvModal')
  const closeCvBtn = document.querySelector('.cv-close')

  // console.log('cvModal:', cvModal);
  // console.log('cvFrame:', cvFrame);
  // console.log('openCvBtn:', openCvBtn);
  // console.log('closeCvBtn:', closeCvBtn);

  const openCvModal = () => {
    const cvPath = openCvBtn?.dataset.cv
    console.log('Abriendo CV Modal, cvPath:', cvPath);
    if (!cvModal || !cvFrame || !cvPath) {
      console.error('CV Modal: Elementos no encontrados', { cvModal, cvFrame, cvPath })
      return
    }
    // Añadir parámetros para ocultar toolbar
    const cvPathWithParams = cvPath + '#toolbar=0&navpanes=0'
    cvFrame.src = cvPathWithParams
    if (cvDownload) {
      cvDownload.href = cvPath
    }
    cvModal.classList.add('active')
    console.log('Modal abierto');
  }

  const closeCvModal = () => {
    if (!cvModal) return
    cvModal.classList.remove('active')
    if (cvFrame) {
      cvFrame.src = ''
    }
  }

  if (openCvBtn) {
    openCvBtn.addEventListener('click', (e) => {
      console.log('Click en botón Ver CV');
      e.preventDefault()
      openCvModal()
    })
  } else {
    console.error('No se encontró openCvBtn');
  }

  if (closeCvBtn) {
    closeCvBtn.addEventListener('click', closeCvModal)
  }

  if (cvModal) {
    cvModal.addEventListener('click', (e) => {
      if (e.target === cvModal) {
        closeCvModal()
      }
    })
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && cvModal?.classList.contains('active')) {
      closeCvModal()
    }
  })
});


// SCRIP QUE MUESTRA EN MAPA EN MOVIL DE LA UBICACION

const btnMapa = document.getElementById("btnMapa")
const modalMapa = document.getElementById("modalMapa")
const cerrarMapa = document.querySelector(".cerrar-mapa")

// solo en dispositivos sin hover (móvil)
if (window.matchMedia("(hover: none)").matches) {
  btnMapa.addEventListener("click", () => {
    modalMapa.classList.add("active")
  })

  cerrarMapa.addEventListener("click", () => {
    modalMapa.classList.remove("active")
  })

  modalMapa.addEventListener("click", e => {
    if (e.target === modalMapa) {
      modalMapa.classList.remove("active")
    }
  })
}


// ======FILTRO DE PROYECTOS=======
// document.addEventListener('DOMContentLoaded', () => {
//   const botones = document.querySelectorAll('.filtro-btn');
//   const cards = document.querySelectorAll('.card');
//   const proyectosGrid = document.querySelector('.proyectos-grid');

//   function mostrarProyectos(categoria) {
//     let hayElementosVisibles = false;
    
//     cards.forEach(card => {
//       const cat = card.dataset.category;

//       // Si es "todos" o coincide con la categoría, mostrar
//       if (categoria === 'todos' || cat === categoria) {
//         card.style.display = '';
//         card.style.visibility = 'visible';
//         card.style.opacity = '1';
//         hayElementosVisibles = true;
//       } 
//       // Ocultar las que no coinciden
//       else {
//         card.style.display = 'none';
//         card.style.visibility = 'hidden';
//       }
//     });
//   }

//   botones.forEach(btn => {
//     btn.addEventListener('click', () => {
//       botones.forEach(b => b.classList.remove('active'));
//       btn.classList.add('active');

//       const filtro = btn.dataset.filter;
//       mostrarProyectos(filtro);
//     });
//   });

//   mostrarProyectos('todos');
// });



// FUNCIONALIDAD DEL FORMULARIO DE COMENTARIOS
  const botones = document.querySelectorAll(".filtro-btn");
  const cards = document.querySelectorAll(".proyectos-grid .card");

  function mostrarCategoria(categoria) {
    const filtro = (categoria || "todos").trim().toLowerCase();

    cards.forEach(card => {
      const cardCategoria = (card.dataset.category || "").trim().toLowerCase();
      const esVisible = filtro === "todos" || cardCategoria === filtro;

      if (esVisible) {
        // Mostrar: remover clase oculto y asegurar visibilidad
        card.classList.remove("oculto");
        card.style.display = "";
        card.style.opacity = "1";
        card.style.visibility = "visible";
        card.style.transform = "none";
        card.setAttribute("data-filtered", "true");  // Flag para no ocultar mientras scroll
      } else {
        // Ocultar: agregar clase oculto y display none
        card.classList.add("oculto");
        card.style.display = "none";
        card.removeAttribute("data-filtered");
      }
    });
  }

  botones.forEach(boton => {
    boton.addEventListener("click", () => {
      botones.forEach(b => b.classList.remove("active"));
      boton.classList.add("active");

      const categoria = boton.dataset.filter;
      mostrarCategoria(categoria);
    });
  });

  if (botones.length) {
    botones[0].classList.add("active");
    mostrarCategoria(botones[0].dataset.filter);
  }





let estrellasSeleccionadas = 0;
console.log('✅ JS de comentarios cargado');

// Base de API (soporta file:// y localhost)
const API_BASE = window.location.origin.startsWith('file') ? 'http://localhost:3000' : window.location.origin;

const comentarioForm = document.getElementById('comentarioForm');
const listaComentariosEl = document.getElementById('listaComentarios');
const prevComentariosBtn = document.getElementById('prevComentarios');
const nextComentariosBtn = document.getElementById('nextComentarios');
const comentarioSubmitBtn = comentarioForm?.querySelector('button[type="submit"]');

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
    alert('Completa tu nombre y comentario');
    return;
  }

  if (!estrellasSeleccionadas) {
    alert('Selecciona una valoración');
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
      console.error('❌ Error body', errorText);
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
