/* Hiệu ứng Tuyết (Snowfall) */
const canvas = document.getElementById("snow");
const ctx = canvas.getContext("2d");
let w = (canvas.width = window.innerWidth);
let h = (canvas.height = window.innerHeight);
let snowflakes = [];

function createSnowflakes() {
  for (let i = 0; i < 100; i++) {
    snowflakes.push({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 4 + 1,
      d: Math.random() * 100,
    });
  }
}

function drawSnowflakes() {
  ctx.clearRect(0, 0, w, h);
  ctx.fillStyle = "white";
  ctx.beginPath();
  for (let i = 0; i < 100; i++) {
    let f = snowflakes[i];
    ctx.moveTo(f.x, f.y);
    ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2, true);
  }
  ctx.fill();
  moveSnowflakes();
}

let angle = 0;
function moveSnowflakes() {
  angle += 0.01;
  for (let i = 0; i < 100; i++) {
    let f = snowflakes[i];
    f.y += Math.cos(angle + f.d) + 1 + f.r / 2;
    f.x += Math.sin(angle) * 2;
    if (f.y > h) {
      f.y = 0;
      f.x = Math.random() * w;
    }
  }
}

function updateSnow() {
  drawSnowflakes();
  requestAnimationFrame(updateSnow);
}

createSnowflakes();
updateSnow();

/* Hiệu ứng Sakura thay bằng hình ảnh từ URL cụ thể */
const sakuraContainer = document.getElementById("sakura-container");
function createSakura() {
  const sakura = document.createElement("img");
  sakura.src = "https://imgur.com/y5cEeTr.png";
  sakura.className = "sakura";
  sakura.style.left = Math.random() * window.innerWidth + "px";
  sakura.style.animationDuration = (3 + Math.random() * 5) + "s";
  sakuraContainer.appendChild(sakura);

  setTimeout(() => {
    sakura.remove();
  }, 8000);
}

setInterval(createSakura, 500);
