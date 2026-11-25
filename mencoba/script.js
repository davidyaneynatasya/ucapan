const canvas = document.getElementById('confetti-canvas');
const ctx = canvas.getContext('2d');
const celebrateBtn = document.getElementById('celebrate-btn');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];
const colors = ['#f59e0b', '#10b981', '#3b82f6', '#ef4444', '#8b5cf6'];

function createConfetti() {
  for (let i = 0; i < 100; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height - canvas.height,
      size: Math.random() * 7 + 4,
      color: colors[Math.floor(Math.random() * colors.length)],
      speedY: Math.random() * 3 + 2,
      speedX: Math.random() * 2 - 1
    });
  }
}

function animateConfetti() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = particles.length - 1; i >= 0; i--) {
    const p = particles[i];
    p.y += p.speedY;
    p.x += p.speedX;
    ctx.fillStyle = p.color;
    ctx.fillRect(p.x, p.y, p.size, p.size);
    if (p.y > canvas.height) {
      particles.splice(i, 1);
    }
  }
  requestAnimationFrame(animateConfetti);
}

celebrateBtn.addEventListener('click', createConfetti);

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

createConfetti();
animateConfetti();