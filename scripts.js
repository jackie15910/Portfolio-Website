document.addEventListener('DOMContentLoaded', function() {
  const hamburgerMenu = document.getElementById('hamburgerMenu');
  const navMenu = document.querySelector('nav ul');
  const scrollToTopBtn = document.getElementById('scrollToTopBtn');

  // Function to toggle nav menu visibility
  hamburgerMenu.addEventListener('click', function() {
    navMenu.classList.toggle('open');
  });

  // Function to check scroll position and toggle button visibility
  function toggleScrollToTopButton() {
    if (window.scrollY > window.innerHeight / 0.6) {
      scrollToTopBtn.classList.add('show');
    } else {
      scrollToTopBtn.classList.remove('show');
    }
  }

  // Show or hide the button based on scroll position
  window.addEventListener('scroll', toggleScrollToTopButton);

  // Scroll to the top when the button is clicked
  scrollToTopBtn.addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // Initial check in case the page is already scrolled halfway down on load
  toggleScrollToTopButton();
});