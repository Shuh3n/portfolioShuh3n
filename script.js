// // Select buttons and sections
// const aboutBtn = document.getElementById('aboutBtn');
// const homeBtn = document.getElementById('homeBtn');
// const proyectsBtn = document.getElementById('proyectsBtn');
// const skillsBtn = document.getElementById('skillsBtn');


// const skillsSection = document.getElementById('skills');
// const aboutSection = document.getElementById('about');
// const proyectSection = document.getElementById('proyects');


// homeBtn.addEventListener('click', () => {
//     skillsSection.classList.add('visible');
//     skillsSection.classList.remove('hidden');
//     proyectSection.classList.add('hidden');
//     aboutSection.classList.add('hidden');
// });

// skillsBtn.addEventListener('click', () => {
//     skillsSection.classList.remove('hidden');
//     proyectSection.classList.add('hidden');
//     aboutSection.classList.add('hidden');
// });


// // Show About Section
// aboutBtn.addEventListener('click', () => {
//     skillsSection.classList.add('hidden');
//     aboutSection.classList.remove('hidden');
//     proyectSection.classList.add('hidden');
// });

// proyectsBtn.addEventListener('click', () => {
//     skillsSection.classList.add('hidden');
//     aboutSection.classList.add('hidden');
//     proyectSection.classList.remove('hidden');
// });



// const sections = document.querySelectorAll('.animatable-section');

// // Configuración del Intersection Observer
// const observerOptions = {
//   threshold: 0.2, // Detecta cuando al menos el 20% de la sección es visible
// };

// const sectionObserver = new IntersectionObserver((entries, observer) => {
//   entries.forEach(entry => {
//     if (entry.isIntersecting) {
//       entry.target.classList.add('section-visible'); // Agrega la clase para la animación
//       observer.unobserve(entry.target); // Deja de observar una vez que la animación se ejecuta
//     }
//   });
// }, observerOptions);

// // Aplicamos el observador a cada sección
// sections.forEach(section => {
//   sectionObserver.observe(section);
// });

// Función que oculta todas las secciones y muestra solo la seleccionada
// Función que oculta todas las secciones y muestra solo la seleccionada
function showSection(targetId) {
  // Seleccionamos todas las secciones
  const sections = document.querySelectorAll('section');
  
  // Ocultamos todas las secciones
  sections.forEach(section => {
      section.classList.remove('visible');
      section.classList.add('hidden');
  });
  
  // Mostramos la sección correspondiente
  const targetSection = document.getElementById(targetId);
  targetSection.classList.remove('hidden');
  targetSection.classList.add('visible');
}

// Event listener para los botones
const buttons = document.querySelectorAll('.showSection');
buttons.forEach(button => {
  button.addEventListener('click', function() {
      const targetId = this.getAttribute('data-target'); // Obtenemos el valor de data-target
      showSection(targetId); // Llamamos a la función showSection
  });
});


