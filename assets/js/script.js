// Smooth Scroll Functionality
document.querySelectorAll('header a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 70, // Offset for sticky header
                behavior: 'smooth',
            });
        }
    });
});

// Scroll Animation
const sections = document.querySelectorAll('.section');
const observerOptions = {
    threshold: 0.3,
    rootMargin: '0px 0px -100px 0px',
};

const sectionObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

sections.forEach(section => {
    sectionObserver.observe(section);
});

// Button Interaction for Buy Now
const buyButton = document.querySelector('.btn-buy');
buyButton.addEventListener('click', () => {
    alert('Redirecting to the purchase page...');
    window.location.href = '#tokenomics'; // Example link
});

// Add class to header when scrolling
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Add a hover effect for the Buy Now button
buyButton.addEventListener('mouseover', () => {
    buyButton.style.transform = 'scale(1.1)';
    buyButton.style.transition = 'transform 0.2s';
});

buyButton.addEventListener('mouseout', () => {
    buyButton.style.transform = 'scale(1)';
});

// Dynamic year update in the footer
const yearElement = document.querySelector('.current-year');
if (yearElement) {
    const currentYear = new Date().getFullYear();
    yearElement.textContent = currentYear;
}

// Animation for social media icons
const socialIcons = document.querySelectorAll('.social-icons img');
socialIcons.forEach(icon => {
    icon.addEventListener('mouseover', () => {
        icon.style.transform = 'rotate(20deg)';
        icon.style.transition = 'transform 0.2s';
    });
    icon.addEventListener('mouseout', () => {
        icon.style.transform = 'rotate(0deg)';
    });
});
