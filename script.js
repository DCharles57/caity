// Reasons I love you
const loveLines = [
  "You care deeply and love loudly 💕",
  "You make people feel safe being themselves",
  "You’re brilliant and humble",
  "Your laugh is contagious",
  "You never stop growing"
];

let loveIndex = 0;
const loveBtn = document.getElementById("loveBtn");
const loveLine = document.getElementById("loveLine");

loveBtn.addEventListener("click", () => {
  loveLine.textContent = loveLines[loveIndex];
  loveIndex = (loveIndex + 1) % loveLines.length;
});

// Easter Egg: XXL → strawberry glow
let typed = "";

document.addEventListener("keydown", (e) => {
  typed += e.key.toUpperCase();
  if (typed.includes("XXL")) {
    document.body.classList.add("strawberry");
    typed = "";
  }
});
