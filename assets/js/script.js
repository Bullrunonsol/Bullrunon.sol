// Animación al hacer scroll
document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".fade-in");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  });

  elements.forEach((el) => observer.observe(el));
});

// Interactividad en botones de redes sociales
const socialIcons = document.querySelectorAll(".social-icons img");
socialIcons.forEach((icon) => {
  icon.addEventListener("mouseover", () => {
    icon.style.transform = "scale(1.2)";
    icon.style.transition = "transform 0.3s ease-in-out";
  });
  icon.addEventListener("mouseout", () => {
    icon.style.transform = "scale(1)";
  });
});

// Animación del gráfico Tokenomics (Placeholder para gráficos interactivos)
const tokenomicsGraph = document.querySelector(".tokenomics-graph img");
if (tokenomicsGraph) {
  tokenomicsGraph.addEventListener("mouseover", () => {
    tokenomicsGraph.style.transform = "scale(1.1)";
    tokenomicsGraph.style.transition = "transform 0.3s ease-in-out";
  });
  tokenomicsGraph.addEventListener("mouseout", () => {
    tokenomicsGraph.style.transform = "scale(1)";
  });
}

// Animación de Hover en las tarjetas de Roadmap
const roadmapItems = document.querySelectorAll(".roadmap-section li");
roadmapItems.forEach((item) => {
  item.addEventListener("mouseover", () => {
    item.style.color = "#1db954";
    item.style.transition = "color 0.3s ease-in-out";
  });
  item.addEventListener("mouseout", () => {
    item.style.color = "#cfcfcf";
  });
});

// Fondo interactivo con partículas simulando lluvia de monedas
const canvas = document.createElement("canvas");
canvas.id = "backgroundCanvas";
document.body.appendChild(canvas);

const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let coins = [];
const coinImage = new Image();
coinImage.src = "coin.png"; // Imagen de moneda (proporcionar la ruta correcta)

function createCoins() {
  for (let i = 0; i < 100; i++) {
    coins.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      speed: Math.random() * 3 + 1,
      size: Math.random() * 20 + 10,
    });
  }
}

function drawCoins() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  coins.forEach((coin) => {
    ctx.drawImage(coinImage, coin.x, coin.y, coin.size, coin.size);
    coin.y += coin.speed;
    if (coin.y > canvas.height) {
      coin.y = -coin.size;
      coin.x = Math.random() * canvas.width;
    }
  });
  requestAnimationFrame(drawCoins);
}

coinImage.onload = () => {
  createCoins();
  drawCoins();
};

// Barra de navegación que cambia al hacer scroll
const navbar = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.style.backgroundColor = "#121212";
    navbar.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.5)";
  } else {
    navbar.style.backgroundColor = "transparent";
    navbar.style.boxShadow = "none";
  }
});

// Animación de botones
const buttons = document.querySelectorAll("button, .buy-now");
buttons.forEach((button) => {
  button.addEventListener("mouseover", () => {
    button.style.transform = "scale(1.1)";
    button.style.transition = "transform 0.3s ease-in-out";
  });
  button.addEventListener("mouseout", () => {
    button.style.transform = "scale(1)";
  });
});

// Formato de números (para estadísticas)
function formatNumber(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// Ejemplo de contador (placeholder)
let tokenSupplyElement = document.querySelector(".token-supply");
if (tokenSupplyElement) {
  let supply = 1000000000; // Número inicial (modificar según sea necesario)
  setInterval(() => {
    supply += Math.floor(Math.random() * 1000); // Incremento aleatorio
    tokenSupplyElement.textContent = formatNumber(supply) + " Tokens";
  }, 3000);
}
