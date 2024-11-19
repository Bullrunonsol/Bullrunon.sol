// Smooth Scroll for Navigation
document.querySelectorAll('.navbar ul li').forEach(item => {
  item.addEventListener('click', event => {
    const targetId = event.target.textContent.toLowerCase();
    const targetSection = document.querySelector(`#${targetId}`);
    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop,
        behavior: 'smooth'
      });
    }
  });
});

// Floating Coins Animation
const floatingCoins = document.querySelectorAll('.coin');
floatingCoins.forEach((coin, index) => {
  setInterval(() => {
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    coin.style.transform = `translate(${x}px, ${y}px)`;
  }, 3000 + index * 1000);
});

// Background Interaction with Mouse
document.addEventListener('mousemove', e => {
  const x = e.clientX / window.innerWidth;
  const y = e.clientY / window.innerHeight;
  document.body.style.backgroundPosition = `${x * 50}% ${y * 50}%`;
});

// Hero Text Animation
const heroText = document.querySelector('.hero h1');
let heroIndex = 0;
const heroMessages = [
  "¡Únete al BullRun!",
  "La Fuerza del Mercado Alcista",
  "Tokenomics de BullRun"
];
setInterval(() => {
  heroIndex = (heroIndex + 1) % heroMessages.length;
  heroText.textContent = heroMessages[heroIndex];
}, 4000);

// Tokenomics Interactive Chart
const chartSegments = document.querySelectorAll('.chart .segment');
chartSegments.forEach(segment => {
  segment.addEventListener('mouseenter', () => {
    segment.style.transform = 'scale(1.1)';
    segment.style.filter = 'brightness(1.5)';
  });
  segment.addEventListener('mouseleave', () => {
    segment.style.transform = 'scale(1)';
    segment.style.filter = 'brightness(1)';
  });
});

// Scroll Animation for Roadmap
const milestones = document.querySelectorAll('.roadmap .milestone');
window.addEventListener('scroll', () => {
  milestones.forEach(milestone => {
    const rect = milestone.getBoundingClientRect();
    if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
      milestone.classList.add('active');
    } else {
      milestone.classList.remove('active');
    }
  });
});

// Scroll Reveal Effect
const scrollRevealElements = document.querySelectorAll('.scroll-reveal');
const revealOnScroll = () => {
  scrollRevealElements.forEach(element => {
    const rect = element.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      element.classList.add('visible');
    } else {
      element.classList.remove('visible');
    }
  });
};
window.addEventListener('scroll', revealOnScroll);

// Dynamic Button Effects
const buttons = document.querySelectorAll('.cta-btn, .navbar ul li');
buttons.forEach(button => {
  button.addEventListener('mouseover', () => {
    button.style.transform = 'scale(1.2)';
    button.style.boxShadow = '0 10px 20px rgba(41, 167, 69, 0.4)';
  });
  button.addEventListener('mouseout', () => {
    button.style.transform = 'scale(1)';
    button.style.boxShadow = 'none';
  });
});

// Background Particles Animation
const particlesContainer = document.createElement('div');
particlesContainer.classList.add('particles-container');
document.body.appendChild(particlesContainer);

for (let i = 0; i < 50; i++) {
  const particle = document.createElement('div');
  particle.classList.add('particle');
  particlesContainer.appendChild(particle);
}

const particles = document.querySelectorAll('.particle');
particles.forEach(particle => {
  const x = Math.random() * window.innerWidth;
  const y = Math.random() * window.innerHeight;
  const size = Math.random() * 10 + 5;
  const duration = Math.random() * 5 + 3;

  particle.style.width = `${size}px`;
  particle.style.height = `${size}px`;
  particle.style.left = `${x}px`;
  particle.style.top = `${y}px`;
  particle.style.animationDuration = `${duration}s`;
});

// Interactive Navigation Bar Change on Scroll
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.style.backgroundColor = '#1c1f26';
    navbar.style.boxShadow = '0 5px 10px rgba(0, 0, 0, 0.5)';
  } else {
    navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.85)';
    navbar.style.boxShadow = 'none';
  }
});

// Glow Effect on Images
const images = document.querySelectorAll('img');
images.forEach(image => {
  image.addEventListener('mouseover', () => {
    image.style.filter = 'brightness(1.3)';
    image.style.transition = 'filter 0.3s';
  });
  image.addEventListener('mouseout', () => {
    image.style.filter = 'brightness(1)';
  });
});
