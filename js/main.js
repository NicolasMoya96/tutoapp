// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu toggle would go here
  console.log('Main JS loaded');
  
  // Smooth scrolling for anchor links
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
  
  // Active link highlighting
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('nav a').forEach(link => {
      const linkPage = link.getAttribute('href').split('/').pop();
      if (linkPage === currentPage) {
          link.classList.add('active');
      }
  });
  
  // Login button functionality
  const loginButton = document.querySelector('.login-btn');
  if (loginButton) {
      loginButton.addEventListener('click', function(e) {
          e.preventDefault();
          alert('Funcionalidad de inicio de sesión. En una aplicación real, esto abriría un modal o redirigiría a una página de login.');
      });
  }
  
  // Primary button functionality
  document.querySelectorAll('.primary-btn').forEach(button => {
      if (!button.classList.contains('login-btn')) {
          button.addEventListener('click', function(e) {
              e.preventDefault();
              alert('Funcionalidad de creación de cuenta. En una aplicación real, esto redirigiría a un formulario de registro.');
          });
      }
  });
});