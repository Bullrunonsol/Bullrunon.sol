// Seleccionar contenedores
const coinContainer = document.querySelector('.coin-rain');
const candlestickContainer = document.querySelector('.candlestick-container');

// Función: Generar monedas
function createCoin() {
    const coin = document.createElement('div');
    coin.classList.add('coin');
    coin.style.left = Math.random() * 100 + 'vw';
    coin.style.animationDuration = Math.random() * 3 + 2 + 's';
    coinContainer.appendChild(coin);

    // Remover monedas después de caer
    setTimeout(() => {
        coin.remove();
    }, 5000);
}

// Generar múltiples monedas
setInterval(createCoin, 300);

// Función: Generar velas chinas
function createCandlestick() {
    const candlestick = document.createElement('div');
    candlestick.classList.add('candlestick');
    candlestick.style.height = Math.random() * 100 + 50 + 'px';
    candlestickContainer.appendChild(candlestick);

    // Animación para reiniciar
    setTimeout(() => {
        candlestick.style.height = Math.random() * 100 + 50 + 'px';
    }, 2000);
}

// Generar múltiples velas chinas
setInterval(createCandlestick, 500);
