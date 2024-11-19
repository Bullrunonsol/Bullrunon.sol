// Smooth scrolling for navbar links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Example of hover effect for images
const heroImage = document.querySelector('.hero-bg');
heroImage.addEventListener('mouseenter', () => {
  heroImage.style.opacity = '0.8';
});
heroImage.addEventListener('mouseleave', () => {
  heroImage.style.opacity = '1';
});
