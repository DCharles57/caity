const reasons = [
  "Because you make growth look like art — calm, intentional, and real 🪿",
  "Because your laugh is a reset button for the whole room.",
  "Because you care deeply, but you still protect your peace.",
  "Because your energy says: ‘I’m leveling up’ without needing to announce it.",
  "Because you’re brilliant AND funny… unfair combo 😤🪿",
];

let reasonIndex = 0;

const nextReasonBtn = document.getElementById("nextReasonBtn");
const reasonText = document.getElementById("reasonText");

nextReasonBtn.addEventListener("click", () => {
  reasonText.textContent = reasons[reasonIndex % reasons.length];
  reasonIndex++;
});

// IMPORTANT: assets/ paths
const memories = [
  {
    title: "Memory 1 🪿",
    desc: "That trip where everything felt easy 🪿",
    img: "assets/travel-1.jpg",
  },
  {
    title: "Memory 2 💗",
    desc: "Laughing until it hurt 💗",
    img: "assets/travel-2.jpeg",
  },
  {
    title: "Memory 3 ✨",
    desc: "Red hair era vibes ✨",
    img: "assets/caitlin-redhair.jpg",
  },
  {
    title: "Memory 4 🫶",
    desc: "A simple moment that meant a lot 🫶",
    img: "assets/travel-3.jpg",
  },
];

const memoryGrid = document.getElementById("memoryGrid");

memories.forEach((m) => {
  const card = document.createElement("div");
  card.className = "memoryCard";

  card.innerHTML = `
    <img class="memoryImg" src="${m.img}" alt="${m.title}">
    <div class="memoryBody">
      <p class="memoryTitle">${m.title}</p>
      <p class="memoryDesc">${m.desc}</p>
    </div>
  `;

  memoryGrid.appendChild(card);
});

// Secret “goose” type thing
let buffer = "";
window.addEventListener("keydown", (e) => {
  if (e.key.length === 1) buffer += e.key.toLowerCase();
  if (buffer.length > 20) buffer = buffer.slice(-20);

  if (buffer.includes("goose")) {
    buffer = "";
    alert("🪿 HONK! Goose mode activated 🪿");
  }
});


