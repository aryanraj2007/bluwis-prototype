// script.js

document.addEventListener('DOMContentLoaded', () => {
    // Initialize AOS
    AOS.init({
      once: true,
      duration: 800
    });
  
    // Enable Bootstrap ScrollSpy
    const scrollSpy = new bootstrap.ScrollSpy(document.body, {
      target: '#navbarNav',
      offset: 100
    });
  
    // Auto-collapse mobile menu after clicking a link
    const navLinks = document.querySelectorAll('.nav-link');
    const navbarCollapseEl = document.getElementById('navbarNav');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (navbarCollapseEl.classList.contains('show')) {
          new bootstrap.Collapse(navbarCollapseEl).hide();
        }
      });
    });
  });
  