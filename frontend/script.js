
// ====== SCROLLREVEAL - PROYECTOS ======
const sr = ScrollReveal({
  distance: '80px',
  duration: 1000,
  easing: 'ease-out',
  reset: true  
})

// Título
sr.reveal('.projects-title', {
  origin: 'top'
})

// Proyectos impares (desde la izquierda)
sr.reveal('.proyecto-wrapper:nth-child(odd)', {
  origin: 'left',
  delay: 200
})

// Proyectos pares (desde la derecha)
sr.reveal('.proyecto-wrapper:nth-child(even)', {
  origin: 'right',
  delay: 200
})

// Cada tarjeta de proyecto
sr.reveal('.card', {
  origin: 'bottom',
  interval: 200
})



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
  reset: true 
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
  reset: true
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




// ====AOS ANIMATIONS sesion2 cv y foto mia ====
AOS.init({
  offset: 150,
  once: false
});



// ====Toggle de Herramientas====
document.addEventListener('DOMContentLoaded', function() {
  const toggleButtons = document.querySelectorAll('.toggle-herramientas');
  
  toggleButtons.forEach(button => {
    button.addEventListener('click', function() {
      const herramientasHeader = this.parentElement;
      const cardTags = herramientasHeader.nextElementSibling;
      
      if (cardTags && cardTags.classList.contains('card-tags')) {
        const isVisible = cardTags.style.display !== 'none';
        
        if (isVisible) {
          cardTags.style.display = 'none';
          this.classList.remove('active');
          this.setAttribute('aria-label', 'Mostrar herramientas');
        } else {
          cardTags.style.display = 'flex';
          this.classList.add('active');
          this.setAttribute('aria-label', 'Ocultar herramientas');
        }
      }
    });
  });
});


// ====Particulas flotantes====
// VANTA.NET({
//   el: "#home",
//   color: 0xa855f7,
//   backgroundColor: 0x000000,
//   points: 10.0,
//   maxDistance: 10.0,
//   spacing: 18.0
// });


// PARTIVULAS FLOTANTES EN 3cer SECCION

const canvas = document.getElementById("space");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const STAR_COUNT = 500;
const stars = [];

class Star {
  constructor() {
    this.reset();
  }

  reset() {
    this.x = Math.random() * canvas.width - canvas.width / 2;
    this.y = Math.random() * canvas.height - canvas.height / 2;
    this.z = Math.random() * canvas.width;

    // Tamaño (pequeñas, medianas, grandes)
    this.size = Math.random() < 0.7 ? 1 : Math.random() < 0.9 ? 2 : 3;

    // Tipo de estrella
    this.type = Math.random() < 0.85 ? "circle" : "cross";

    // Velocidad según tamaño
    this.speed = this.size === 3 ? 14 : this.size === 2 ? 10 : 6;
  }

  update() {
    this.z -= this.speed;
    if (this.z <= 0) {
      this.reset();
      this.z = canvas.width;
    }
  }

  draw() {
    const sx = (this.x / this.z) * canvas.width + canvas.width / 2;
    const sy = (this.y / this.z) * canvas.height + canvas.height / 2;

    ctx.strokeStyle = "white";
    ctx.fillStyle = "white";

    if (this.type === "circle") {
      ctx.beginPath();
      ctx.arc(sx, sy, this.size, 0, Math.PI * 2);
      ctx.fill();
    } else {
      // Cruz (X)
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(sx - this.size, sy - this.size);
      ctx.lineTo(sx + this.size, sy + this.size);
      ctx.moveTo(sx + this.size, sy - this.size);
      ctx.lineTo(sx - this.size, sy + this.size);
      ctx.stroke();
    }
  }
}

for (let i = 0; i < STAR_COUNT; i++) {
  stars.push(new Star());
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  stars.forEach(star => {
    star.update();
    star.draw();
  });
  requestAnimationFrame(animate);
}

animate();

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});







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
    canvas.style.width = '100%'
    canvas.style.maxWidth = '100vw'
    canvas.style.height = '100%'
    canvas.style.zIndex = '1'
    canvas.style.pointerEvents = 'none'
    canvas.style.overflow = 'hidden'
    
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
  // Desactivar parallax en dispositivos móviles (menores a 768px)
  if (hero && window.innerWidth > 768) {
    hero.style.transform = `translateY(${scrolled * 0.5}px)`
  } else if (hero) {
    hero.style.transform = 'none'
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
  const playButtons = document.querySelectorAll('.play-btn, .play-btn-demo, .btn-video');

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
        modalVideo.muted = true;
        modalVideo.load();
        modalVideo.play();
      }

      if (videoModal) {
        videoModal.classList.add('active');
      }
    });
  });

  // Cerrar modal al hacer clic en la X (buscar el botón dentro del videoModal)
  if (videoModal) {
    const videoCloseBtn = videoModal.querySelector('.close-modal');
    if (videoCloseBtn) {
      videoCloseBtn.addEventListener('click', function() {
        videoModal.classList.remove('active');
        resetMedia();
      });
    }
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

// solo en dispositivos sin hover (móvil) y si los elementos existen
if (
  window.matchMedia("(hover: none)").matches &&
  btnMapa &&
  modalMapa &&
  cerrarMapa
) {
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


let estrellasSeleccionadas = 0;

  //  API BASE (local / producción)

const API_BASE =
  window.location.hostname === 'localhost'
    ? 'http://localhost:3000'
    : 'https://mi-portafolio-u4sg.onrender.com';


  //  ELEMENTOS

const comentarioForm = document.getElementById('comentarioForm');
const listaComentariosEl = document.getElementById('listaComentarios');
const prevComentariosBtn = document.getElementById('prevComentarios');
const nextComentariosBtn = document.getElementById('nextComentarios');


  //  TOAST

function showToast(message) {
  let container = document.getElementById('toastContainer');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toastContainer';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast toast-info';
  toast.textContent = message;

  container.appendChild(toast);
  requestAnimationFrame(() => toast.classList.add('visible'));

  setTimeout(() => {
    toast.classList.remove('visible');
    setTimeout(() => toast.remove(), 200);
  }, 2500);
}

  //  ESTRELLAS

document.querySelectorAll('.estrellas span').forEach(estrella => {
  estrella.addEventListener('click', () => {
    estrellasSeleccionadas = Number(estrella.dataset.value);

    document.querySelectorAll('.estrellas span').forEach(e => {
      e.classList.toggle('activa', Number(e.dataset.value) <= estrellasSeleccionadas);
    });
  });
});

  //  SCROLL COMENTARIOS

   function scrollComentarios(direction) {
  if (!listaComentariosEl) return;
  const cardWidth = listaComentariosEl.querySelector('.comentario')?.offsetWidth || 300;
  listaComentariosEl.scrollBy({
    left: direction * (cardWidth + 16),
    behavior: 'smooth'
  });
}

prevComentariosBtn?.addEventListener('click', () => scrollComentarios(-1));
nextComentariosBtn?.addEventListener('click', () => scrollComentarios(1));

//  ENVIAR COMENTARIO

async function enviarComentario() {
  const nombre = document.getElementById('nombre')?.value.trim();
  const mensaje = document.getElementById('mensaje')?.value.trim();

  if (!nombre || !mensaje) {
    showToast('Completa todos los campos');
    return;
  }

  if (!estrellasSeleccionadas) {
    showToast('Selecciona una valoración');
    return;
  }

  try {
    const res = await fetch(`${API_BASE}/api/comentarios`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache'
      },
      body: JSON.stringify({
        nombre,
        mensaje,
        estrellas: estrellasSeleccionadas
      })
    });

    if (!res.ok) throw new Error('Error al enviar comentario');

    comentarioForm.reset();
    estrellasSeleccionadas = 0;
    document.querySelectorAll('.estrellas span')
      .forEach(e => e.classList.remove('activa'));

    await cargarComentarios();
    showToast('Comentario enviado ✨');
    
    // Lanzar confeti al enviar comentario
    const btnEnviar = document.querySelector('#comentarioForm button[type="submit"]');
    if (btnEnviar) {
      window.lanzarConfetiPremium(btnEnviar);
    }
  } catch (error) {
    console.error(error);
    showToast('No se pudo enviar el comentario');
  }
}

  //  FORM SUBMIT

comentarioForm?.addEventListener('submit', (e) => {
  e.preventDefault();
  enviarComentario();
});

  //  CARGAR COMENTARIOS

async function cargarComentarios() {
  console.log(' Intentando cargar comentarios desde:', `${API_BASE}/api/comentarios`);
  try {
    const res = await fetch(`${API_BASE}/api/comentarios`, {
      method: 'GET',
      headers: { 'Cache-Control': 'no-cache' }
    });

    console.log(' Respuesta recibida - Status:', res.status, 'OK:', res.ok);

    if (!res.ok) throw new Error('Error al cargar comentarios');

    const comentarios = await res.json();
    console.log(' Comentarios recibidos:', comentarios.length, 'items');
    
    if (!listaComentariosEl) {
      console.error(' No se encontró el elemento listaComentarios');
      return;
    }
    
    listaComentariosEl.innerHTML = '';

    comentarios.forEach(c => {
      listaComentariosEl.innerHTML += `
        <div class="comentario">
          <strong>${c.nombre}</strong>
          <p>${c.mensaje}</p>
          <div class="rating">${'★'.repeat(c.estrellas)}</div>
        </div>
      `;
    });
    
    console.log('✨ Comentarios renderizados correctamente');
  } catch (error) {
    console.error('❌ Error al cargar comentarios:', error);
    showToast('Error al cargar comentarios');
  }
}

//  ===============================
//    INIT

document.addEventListener('DOMContentLoaded', () => {
  cargarComentarios();
});

// Scroll suave al hacer click en el indicador de scroll
const scrollIndicator = document.querySelector('.scroll-indicator');
if (scrollIndicator) {
  scrollIndicator.addEventListener('click', () => {
    document.getElementById('About')?.scrollIntoView({ behavior: 'smooth' });
  });
}


// ====== NAVEGACIÓN HORIZONTAL DE PROYECTOS (MÓVIL) ======
const proyectosGrid = document.querySelector('.proyectos-grid');
const prevProyectoBtn = document.querySelector('.prev-proyecto');
const nextProyectoBtn = document.querySelector('.next-proyecto');

if (proyectosGrid && prevProyectoBtn && nextProyectoBtn) {
  
  // Función para desplazar proyectos
  const scrollProyectos = (direction) => {
    const wrapperWidth = proyectosGrid.querySelector('.proyecto-wrapper')?.offsetWidth || 300;
    const scrollAmount = wrapperWidth + 20; // wrapper width + gap
    
    proyectosGrid.scrollBy({
      left: direction * scrollAmount,
      behavior: 'smooth'
    });
  };

  // Event listeners
  prevProyectoBtn.addEventListener('click', () => scrollProyectos(-1));
  nextProyectoBtn.addEventListener('click', () => scrollProyectos(1));

  // Ocultar/mostrar botones según posición del scroll
  proyectosGrid.addEventListener('scroll', () => {
    const scrollLeft = proyectosGrid.scrollLeft;
    const maxScroll = proyectosGrid.scrollWidth - proyectosGrid.clientWidth;

    prevProyectoBtn.style.opacity = scrollLeft <= 0 ? '0.3' : '1';
    prevProyectoBtn.style.pointerEvents = scrollLeft <= 0 ? 'none' : 'auto';

    nextProyectoBtn.style.opacity = scrollLeft >= maxScroll - 10 ? '0.3' : '1';
    nextProyectoBtn.style.pointerEvents = scrollLeft >= maxScroll - 10 ? 'none' : 'auto';
  });
}
