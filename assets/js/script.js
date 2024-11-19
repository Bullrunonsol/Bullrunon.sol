<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BullRun - La Revolución de las Memecoins</title>
    <link rel="stylesheet" href="assets/css/style.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.css">
    <script src="https://cdn.jsdelivr.net/npm/particles.js"></script>
</head>
<body>
    <div id="particles-js"></div>
    <!-- Header Section -->
    <header class="sticky-header" data-aos="fade-down">
        <div class="logo">
            <img src="assets/images/logo.png" alt="BullRun Logo">
        </div>
        <nav>
            <ul>
                <li><a href="#inicio">Inicio</a></li>
                <li><a href="#tokenomics">Tokenomics</a></li>
                <li><a href="#roadmap">Roadmap</a></li>
                <li><a href="#equipo">Equipo</a></li>
                <li><a href="#testimonios">Testimonios</a></li>
                <li><a href="#faq">FAQ</a></li>
                <li><a href="#contacto">Contacto</a></li>
            </ul>
        </nav>
    </header>

    <!-- Hero Section -->
    <section id="inicio" class="hero" data-aos="fade-up">
        <h1>¡Bienvenido a BullRun!</h1>
        <p>La revolución de las memecoins en la red Solana.</p>
        <a href="#tokenomics" class="cta">Explora Más</a>
    </section>

    <!-- Tokenomics Section -->
    <section id="tokenomics" class="tokenomics" data-aos="zoom-in">
        <h2>Tokenomics</h2>
        <div id="chart"></div>
        <ul>
            <li><strong>5%:</strong> Marketing</li>
            <li><strong>5%:</strong> Reservas para Desarrolladores</li>
            <li><strong>5%:</strong> Crecimiento Futuro (Staking, Airdrops)</li>
            <li><strong>85%:</strong> Liquidez</li>
        </ul>
    </section>

    <!-- Roadmap Section -->
    <section id="roadmap" class="roadmap" data-aos="fade-left">
        <h2>Roadmap</h2>
        <ul>
            <li><strong>Q4 2024:</strong> Lanzamiento del Token</li>
            <li><strong>Q1 2025:</strong> Campaña de Marketing</li>
            <li><strong>Q2 2025:</strong> Alianzas Estratégicas</li>
            <li><strong>Q3 2025:</strong> Implementación de Staking</li>
        </ul>
    </section>

    <!-- Equipo Section -->
    <section id="equipo" class="equipo" data-aos="fade-right">
        <h2>Conoce al Equipo</h2>
        <div class="team-member">
            <img src="assets/images/team1.png" alt="Miembro del Equipo">
            <h3>Desarrollador Principal</h3>
            <p>Experto en blockchain y estrategias DeFi.</p>
        </div>
        <div class="team-member">
            <img src="assets/images/team2.png" alt="Miembro del Equipo">
            <h3>Community Manager</h3>
            <p>Construyendo una comunidad sólida en torno a BullRun.</p>
        </div>
    </section>

    <!-- Testimonios Section -->
    <section id="testimonios" class="testimonios" data-aos="fade-up">
        <h2>Lo Que Dicen Nuestros Usuarios</h2>
        <div class="testimonial">
            <p>"BullRun me cambió la vida. ¡Estoy emocionado por el futuro!"</p>
            <span>- Juan Crypto</span>
        </div>
        <div class="testimonial">
            <p>"Esta memecoin tiene un equipo increíble detrás. ¡HODL!"</p>
            <span>- María Blockchain</span>
        </div>
    </section>

    <!-- FAQ Section -->
    <section id="faq" class="faq" data-aos="fade-left">
        <h2>Preguntas Frecuentes</h2>
        <div class="faq-item">
            <h3>¿Qué es BullRun?</h3>
            <p>BullRun es una memecoin basada en la red Solana que simboliza la fuerza del mercado alcista.</p>
        </div>
        <div class="faq-item">
            <h3>¿Cómo puedo comprar BullRun?</h3>
            <p>Pronto estará disponible en los principales exchanges. ¡Mantente atento!</p>
        </div>
        <div class="faq-item">
            <h3>¿Por qué invertir en BullRun?</h3>
            <p>Porque somos parte de la revolución del próximo bullrun, respaldados por una comunidad sólida.</p>
        </div>
    </section>

    <!-- Footer Section -->
    <footer id="contacto" data-aos="fade-up">
        <h2>Contacto</h2>
        <p>Síguenos en nuestras redes sociales:</p>
        <a href="https://twitter.com/bullrun" target="_blank">Twitter</a>
        <a href="https://t.me/bullrun" target="_blank">Telegram</a>
        <form id="contact-form">
            <input type="text" placeholder="Tu Nombre" required>
            <input type="email" placeholder="Tu Correo" required>
            <textarea placeholder="Tu Mensaje"></textarea>
            <button type="submit">Enviar</button>
        </form>
    </footer>

    <script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
    <script src="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.js"></script>
    <script src="assets/js/script.js"></script>
    <script>
        particlesJS.load('particles-js', 'assets/js/particles.json', function() {
            console.log('Particles.js loaded!');
        });
        AOS.init();
    </script>
</body>
</html>
