// Alternar menú móvil
document.addEventListener('DOMContentLoaded', function() {
  // El menú móvil cambiaría aquí
  console.log('Main JS loaded');
  
  
// Desplazamiento suave para enlaces de anclaje
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
          e.preventDefault();
          
          const targetId = this.getAttribute('href');
          if (targetId === '#') return;
          
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
              targetElement.scrollIntoView({
                  behavior: 'smooth'
              });
          }
      });
  });
  
  // Resaltado de enlaces activos
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('nav a').forEach(link => {
      const linkPage = link.getAttribute('href').split('/').pop();
      if (linkPage === currentPage) {
          link.classList.add('active');
      }
  });
  
// Funcionalidad del botón de inicio de sesión
  const loginButton = document.querySelector('.login-btn');
  if (loginButton) {
      loginButton.addEventListener('click', function(e) {
          e.preventDefault();
          alert('Funcionalidad de inicio de sesión. En una aplicación real, esto abriría un modal o redirigiría a una página de login.');
      });
  }
  
  // Funcionalidad del botón principal
  document.querySelectorAll('.primary-btn').forEach(button => {
      if (!button.classList.contains('login-btn')) {
          button.addEventListener('click', function(e) {
              e.preventDefault();
              alert('Funcionalidad de creación de cuenta. En una aplicación real, esto redirigiría a un formulario de registro.');
          });
      }
  });
});