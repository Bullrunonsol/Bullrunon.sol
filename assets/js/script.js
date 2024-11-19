document.addEventListener('DOMContentLoaded', () => {
    // Initialize AOS animations
    AOS.init({ duration: 1200 });

    // Render Tokenomics Chart
    var options = {
        chart: {
            type: 'donut'
        },
        series: [5, 5, 5, 85],
        labels: ['Marketing', 'Reservas', 'Crecimiento Futuro', 'Liquidez'],
        colors: ['#00ff00', '#ffd700', '#00aaff', '#ff0055']
    };
    var chart = new ApexCharts(document.querySelector("#chart"), options);
    chart.render();

    // Interactive Background
    document.querySelector('.interactive-background').addEventListener('mousemove', (e) => {
        const x = e.pageX;
        const y = e.pageY;
        e.target.style.background = `radial-gradient(circle at ${x}px ${y}px, #00ff00, #000)`;
    });
});
