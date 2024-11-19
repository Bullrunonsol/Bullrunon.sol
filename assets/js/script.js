// Smooth Scrolling for Navbar Links
document.querySelectorAll('.navbar nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        window.scrollTo({
            top: targetElement.offsetTop - 80, // Adjust for fixed navbar height
            behavior: 'smooth',
        });
    });
});

// Scroll Animations for Sections
const sections = document.querySelectorAll('section');
const options = {
    threshold: 0.25,
};

const sectionObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, options);

sections.forEach(section => {
    sectionObserver.observe(section);
});

// Button Hover Effects
const buttons = document.querySelectorAll('.buy-now-btn, .step');
buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
        button.style.transform = 'scale(1.1)';
    });

    button.addEventListener('mouseleave', () => {
        button.style.transform = 'scale(1)';
    });
});

// Floating Images Animation
const floatingImages = document.querySelectorAll('.social-links img');
floatingImages.forEach((img, index) => {
    img.style.animation = `float ${2 + index}s infinite alternate`;
});

// Tokenomics Chart Animation
const tokenomicsImage = document.querySelector('.tokenomics-section img');
tokenomicsImage.addEventListener('mouseover', () => {
    tokenomicsImage.style.transform = 'rotate(360deg)';
    tokenomicsImage.style.transition = 'transform 1s ease';
});

tokenomicsImage.addEventListener('mouseleave', () => {
    tokenomicsImage.style.transform = 'rotate(0deg)';
});

// Back to Top Button
const backToTop = document.createElement('button');
backToTop.innerText = '↑';
backToTop.style.position = 'fixed';
backToTop.style.bottom = '20px';
backToTop.style.right = '20px';
backToTop.style.padding = '10px';
backToTop.style.backgroundColor = '#39ff14';
backToTop.style.color = '#000';
backToTop.style.border = 'none';
backToTop.style.borderRadius = '5px';
backToTop.style.cursor = 'pointer';
backToTop.style.display = 'none';
backToTop.style.zIndex = '1000';
document.body.appendChild(backToTop);

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTop.style.display = 'block';
    } else {
        backToTop.style.display = 'none';
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
});

// Dynamic Background Animation
const heroSection = document.querySelector('.hero-section');
let position = 0;
setInterval(() => {
    position += 1;
    heroSection.style.backgroundPosition = `${position}px ${position}px`;
}, 50);

// Fade In Animations for Elements
document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('h1, h2, p, img');
    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transition = 'opacity 0.5s ease';
    });

    window.addEventListener('scroll', () => {
        elements.forEach(element => {
            const rect = element.getBoundingClientRect();
            if (rect.top < window.innerHeight) {
                element.style.opacity = '1';
            }
        });
    });
});
