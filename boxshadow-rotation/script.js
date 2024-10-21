const box = document.querySelector('.box');

let angle = 0;
const radius = 20; // The radius of the circular shadow path
const shadowBlur = 15; // The blur intensity of the shadow

function rotateShadow() {
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;

    box.style.boxShadow = `${x}px ${y}px ${shadowBlur}px rgba(0, 0, 0, 0.5)`;

    angle += 0.05; // Increment the angle to create continuous rotation
    requestAnimationFrame(rotateShadow);
}

rotateShadow();
