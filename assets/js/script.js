document.addEventListener('DOMContentLoaded', () => {
    // Inicializar animaciones AOS
    AOS.init({
        duration: 1500,
        once: true,
    });

    // Renderizar el gráfico de Tokenomics
    const tokenomicsOptions = {
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

    const tokenomicsChart = new ApexCharts(document.querySelector('#chart'), tokenomicsOptions);
    tokenomicsChart.render();

    // Configuración del fondo de partículas
    particlesJS('particles-js', {
        particles: {
            number: {
                value: 150,
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
                random: true,
                anim: {
                    enable: true,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false,
                },
            },
            size: {
                value: 3,
                random: true,
                anim: {
                    enable: true,
                    speed: 5,
                    size_min: 0.1,
                    sync: false,
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
                speed: 3,
                direction: 'none',
                random: false,
                straight: false,
                out_mode: 'out',
                bounce: false,
                attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200,
                },
            },
        },
        interactivity: {
            detect_on: 'canvas',
            events: {
                onhover: {
                    enable: true,
                    mode: 'grab',
                },
                onclick: {
                    enable: true,
                    mode: 'push',
                },
                resize: true,
            },
            modes: {
                grab: {
                    distance: 200,
                    line_linked: {
                        opacity: 1,
                    },
                },
                push: {
                    particles_nb: 4,
                },
            },
        },
    });

    // Navegación suave entre secciones
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

    // FAQ Interactivo
    const faqItems = document.querySelectorAll('.faq-item h3');
    faqItems.forEach((item) => {
        item.addEventListener('click', () => {
            const content = item.nextElementSibling;
            content.style.display = content.style.display === 'block' ? 'none' : 'block';
        });
    });

    // Animaciones en los artículos del blog
    const blogArticles = document.querySelectorAll('.blog article');
    blogArticles.forEach((article) => {
        article.addEventListener('mouseover', () => {
            article.style.transform = 'scale(1.05)';
            article.style.boxShadow = '0px 8px 20px rgba(0, 255, 0, 0.6)';
            article.style.transition = 'transform 0.3s, box-shadow 0.3s';
        });

        article.addEventListener('mouseout', () => {
            article.style.transform = 'scale(1)';
            article.style.boxShadow = 'none';
        });
    });

    // Formulario de contacto funcional
    const contactForm = document.querySelector('#contact-form');
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        alert('¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.');
        contactForm.reset();
    });

    // Contador de tokens vendidos (simulación)
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

    // Animación interactiva en el equipo
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

    // Botón de regreso al inicio
    let backToTopButton = document.createElement('button');
    backToTopButton.textContent = '⬆️';
    backToTopButton.style.position = 'fixed';
    backToTopButton.style.bottom = '20px';
    backToTopButton.style.left = '20px';
    backToTopButton.style.padding = '10px 15px';
    backToTopButton.style.backgroundColor = '#00ff00';
    backToTopButton.style.color = '#000';
    backToTopButton.style.border = 'none';
    backToTopButton.style.borderRadius = '50%';
    backToTopButton.style.boxShadow = '0px 4px 10px rgba(0, 0, 0, 0.5)';
    backToTopButton.style.cursor = 'pointer';
    backToTopButton.style.display = 'none';
    backToTopButton.style.zIndex = '1000';
    document.body.appendChild(backToTopButton);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 200) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    });
});
