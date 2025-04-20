// Menú móvil
document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.querySelector('.mobile-menu');
    const navMenu = document.querySelector('nav ul');
    
    if (menuBtn && navMenu) {
      // Alternar menú al hacer clic
      menuBtn.addEventListener('click', function() {
        navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
      });
      
      // Cerrar menú al seleccionar opción (en móviles)
      const navLinks = document.querySelectorAll('nav ul li a');
      navLinks.forEach(link => {
        link.addEventListener('click', function() {
          if (window.innerWidth <= 768) {
            navMenu.style.display = 'none';
          }
        });
      });
      
      // Ajustar menú al cambiar tamaño de pantalla
      window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
          navMenu.style.display = 'flex';
        } else {
          navMenu.style.display = 'none';
        }
      });
    }
    
    // Efecto especial para botones de donación
    const donationBtns = document.querySelectorAll('.btn-primary');
    donationBtns.forEach(btn => {
      btn.addEventListener('mouseenter', function() {
        this.innerHTML = '❤️ ' + this.textContent + ' ❤️';
      });
      
      btn.addEventListener('mouseleave', function() {
        this.innerHTML = this.textContent;
      });
    });
  });