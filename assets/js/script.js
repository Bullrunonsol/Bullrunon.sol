document.addEventListener("DOMContentLoaded", () => {
    // Smooth scroll for menu items
    document.querySelectorAll("nav a").forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            target.scrollIntoView({ behavior: "smooth" });
        });
    });

    // Animations for buy boxes
    const buyBoxes = document.querySelectorAll(".buy-box");
    buyBoxes.forEach(box => {
        box.addEventListener("mouseenter", () => {
            box.style.transform = "scale(1.05)";
            box.style.transition = "transform 0.3s";
        });
        box.addEventListener("mouseleave", () => {
            box.style.transform = "scale(1)";
        });
    });
});
