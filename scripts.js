document.addEventListener('DOMContentLoaded', function() {
  const hamburgerMenu = document.getElementById('hamburgerMenu');
  const navMenu = document.querySelector('nav ul');
  const scrollToTopBtn = document.getElementById('scrollToTopBtn');

  hamburgerMenu.addEventListener('click', function() {
    navMenu.classList.toggle('open');
  });

  function toggleScrollToTopButton() {
    const triggerPoint = window.innerWidth <= 768 ? window.innerHeight * 6 : window.innerHeight * 1.5;
    
    if (window.scrollY > triggerPoint) {
      scrollToTopBtn.classList.add('show');
    } else {
      scrollToTopBtn.classList.remove('show');
    }
  }

  window.addEventListener('scroll', toggleScrollToTopButton);

  scrollToTopBtn.addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  toggleScrollToTopButton();
});