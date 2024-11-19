document.addEventListener('DOMContentLoaded', () => {
    // Inicializar AOS (Animate on Scroll)
    AOS.init({
        duration: 1500,
        once: true,
    });

    // Renderizar el gráfico de Tokenomics
    var tokenomicsOptions = {
        chart: {
            type: 'donut',
            height: 350,
        },
        series: [5, 5, 5, 85],
        labels: ['Marketing', 'Reservas para Desarrolladores', 'Crecimiento Futuro', 'Liquidez'],
        colors: ['#00ff00', '#ffd700', '#ff5733', '#1e90ff'],
        responsive: [
            {
                breakpoint: 768,
                options: {
                    chart: {
                        width: 300,
                    },
                    legend: {
                        position: 'bottom',
                    },
                },
            },
        ],
    };

    var tokenomicsChart = new ApexCharts(document.querySelector('#chart'), tokenomicsOptions);
    tokenomicsChart.render();

    // Partículas en el fondo
    particlesJS('particles-js', {
        particles: {
            number: {
                value: 100,
                density: {
                    enable: true,
                    value_area: 800,
                },
            },
            color: {
                value: '#00ff00',
            },
            shape: {
                type: 'circle',
                stroke: {
                    width: 0,
                    color: '#000000',
                },
            },
            opacity: {
                value: 0.5,
                random: false,
                anim: {
                    enable: false,
                },
            },
            size: {
                value: 3,
                random: true,
                anim: {
                    enable: false,
                },
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: '#00ff00',
                opacity: 0.4,
                width: 1,
            },
            move: {
                enable: true,
                speed: 2,
                direction: 'none',
                random: false,
                straight: false,
                out_mode: 'out',
            },
        },
        interactivity: {
            detect_on: 'canvas',
            events: {
                onhover: {
                    enable: true,
                    mode: 'repulse',
                },
                onclick: {
                    enable: true,
                    mode: 'push',
                },
                resize: true,
            },
            modes: {
                repulse: {
                    distance: 100,
                    duration: 0.4,
                },
                push: {
                    particles_nb: 4,
                },
            },
        },
    });

    // FAQ Interactivo
    const faqItems = document.querySelectorAll('.faq-item h3');
    faqItems.forEach((item) => {
        item.addEventListener('click', () => {
            const content = item.nextElementSibling;
            content.style.display = content.style.display === 'block' ? 'none' : 'block';
        });
    });

    // Animaciones de Testimonios
    const testimonials = document.querySelectorAll('.testimonial');
    testimonials.forEach((testimonial) => {
        testimonial.addEventListener('mouseover', () => {
            testimonial.style.transform = 'scale(1.1)';
            testimonial.style.transition = 'transform 0.3s';
        });

        testimonial.addEventListener('mouseout', () => {
            testimonial.style.transform = 'scale(1)';
        });
    });

    // Formulario de Contacto
    const contactForm = document.querySelector('#contact-form');
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        alert('¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.');
        contactForm.reset();
    });

    // Navegación suave
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach((link) => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute('href'));
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        });
    });

    // Blog Animado
    const blogArticles = document.querySelectorAll('.blog article');
    blogArticles.forEach((article) => {
        article.addEventListener('mouseover', () => {
            article.style.boxShadow = '0px 4px 15px rgba(0, 255, 0, 0.7)';
            article.style.transform = 'scale(1.05)';
            article.style.transition = 'all 0.3s';
        });

        article.addEventListener('mouseout', () => {
            article.style.boxShadow = 'none';
            article.style.transform = 'scale(1)';
        });
    });

    // Contador dinámico (Simulación de tokens vendidos)
    let counterElement = document.createElement('div');
    counterElement.id = 'counter';
    counterElement.style.position = 'fixed';
    counterElement.style.bottom = '20px';
    counterElement.style.right = '20px';
    counterElement.style.padding = '10px 20px';
    counterElement.style.backgroundColor = '#00ff00';
    counterElement.style.color = '#000';
    counterElement.style.borderRadius = '5px';
    counterElement.style.boxShadow = '0px 4px 10px rgba(0, 0, 0, 0.5)';
    counterElement.style.zIndex = '1000';
    counterElement.innerHTML = '<strong>Tokens Vendidos:</strong> <span id="token-count">0</span>';
    document.body.appendChild(counterElement);

    let tokenCount = 0;
    setInterval(() => {
        tokenCount += Math.floor(Math.random() * 10) + 1; // Simulación de tokens vendidos
        document.getElementById('token-count').textContent = tokenCount;
    }, 2000);

    // Animaciones para la sección del equipo
    const teamMembers = document.querySelectorAll('.team-member');
    teamMembers.forEach((member) => {
        member.addEventListener('mouseover', () => {
            member.style.transform = 'rotateY(360deg)';
            member.style.transition = 'transform 0.5s ease-in-out';
        });

        member.addEventListener('mouseout', () => {
            member.style.transform = 'rotateY(0)';
        });
    });
});
