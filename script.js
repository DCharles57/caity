// --- YEAR ---
document.getElementById("year").textContent = new Date().getFullYear();

// --- REASONS (cycles lines) ---
const reasons = [
  "Because you make growth feel like a lifestyle, not a mood.",
  "Because you’re conquering the mental health field with real purpose.",
  "Because you’re insanely good at math and still act surprised every time.",
  "Because your freckles + red hair combo is literally your signature.",
  "Because you cook like it’s love translated into food.",
  "Because your confidence is earned — and it looks perfect on you.",
  "Because you drive like NASCAR and I somehow feel safer with you anyway.",
  "Because you love Ghostface and Terrifier… and still have the warmest heart.",
  "Because you’re always trying to be better — and you actually do it.",
  "Because you swear you’re hilarious… and the wild part is you are."
];

let reasonIndex = 0;
const reasonLine = document.getElementById("reasonLine");
const nextReasonBtn = document.getElementById("nextReasonBtn");

function showReason() {
  reasonLine.classList.remove("pop");
  void reasonLine.offsetWidth; // restart animation
  reasonLine.textContent = reasons[reasonIndex];
  reasonLine.classList.add("pop");
  reasonIndex = (reasonIndex + 1) % reasons.length;
}
nextReasonBtn.addEventListener("click", showReason);

// --- FLIP CARDS ---
document.querySelectorAll(".flip").forEach(card => {
  card.addEventListener("click", (e) => {
    // If they clicked the button, don't double-toggle flip
    if (e.target.classList.contains("openImg")) return;
    card.classList.toggle("isFlipped");
  });
});

// --- LIGHTBOX ---
const lightbox = document.getElementById("lightbox");
const lbImg = document.getElementById("lbImg");
const lbCap = document.getElementById("lbCap");
const lbClose = document.getElementById("lbClose");

function openLightbox(src, cap) {
  lbImg.src = src;
  lbCap.textContent = cap || "";
  lightbox.classList.add("open");
  lightbox.setAttribute("aria-hidden", "false");
}

function closeLightbox() {
  lightbox.classList.remove("open");
  lightbox.setAttribute("aria-hidden", "true");
  lbImg.src = "";
  lbCap.textContent = "";
}

lbClose.addEventListener("click", closeLightbox);
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) closeLightbox();
});
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeLightbox();
});

document.querySelectorAll(".openImg").forEach(btn => {
  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    const card = btn.closest(".flip");
    const img = card.querySelector("img");
    const cap = card.dataset.caption || "";
    openLightbox(img.getAttribute("src"), cap);
  });
});

// --- TOAST ---
const toast = document.getElementById("toast");
let toastTimer = null;

function showToast(msg) {
  toast.textContent = msg;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 1800);
}

// --- 🍓 EASTER EGG: type "XXL" anywhere ---
const pillText = document.querySelector(".pillText");
let buffer = "";

window.addEventListener("keydown", (e) => {
  // ignore modifier keys
  if (e.key.length !== 1) return;

  buffer += e.key.toUpperCase();
  if (buffer.length > 12) buffer = buffer.slice(-12);

  pillText.textContent = `Typed: ${buffer}`;

  if (buffer.includes("XXL")) {
    document.body.classList.add("strawberry");
    showToast("🍓 Strawberry Mode unlocked.");
    buffer = "";
  }
});

// --- BACKGROUND CANVAS FX (simple particles) ---
const canvas = document.getElementById("fx");
const ctx = canvas.getContext("2d");

function resize() {
  const dpr = Math.min(2, window.devicePixelRatio || 1);
  canvas.width = Math.floor(window.innerWidth * dpr);
  canvas.height = Math.floor(window.innerHeight * dpr);
  canvas.style.width = window.innerWidth + "px";
  canvas.style.height = window.innerHeight + "px";
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
}
window.addEventListener("resize", resize);
resize();

const N = 70;
const dots = Array.from({ length: N }, () => ({
  x: Math.random() * window.innerWidth,
  y: Math.random() * window.innerHeight,
  r: 1 + Math.random() * 2.2,
  vx: (-0.25 + Math.random() * 0.5),
  vy: (-0.25 + Math.random() * 0.5),
  a: 0.08 + Math.random() * 0.12
}));

function step() {
  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

  const strawberry = document.body.classList.contains("strawberry");

  for (const p of dots) {
    p.x += p.vx;
    p.y += p.vy;

    if (p.x < -10) p.x = window.innerWidth + 10;
    if (p.x > window.innerWidth + 10) p.x = -10;
    if (p.y < -10) p.y = window.innerHeight + 10;
    if (p.y > window.innerHeight + 10) p.y = -10;

    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = strawberry ? `rgba(255,120,170,${p.a})` : `rgba(170,190,255,${p.a})`;
    ctx.fill();
  }

  requestAnimationFrame(step);
}
step();
