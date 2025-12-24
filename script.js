// Reasons button
const reasons = [
  "You genuinely care about people 💗",
  "You’re smart as hell and humble about it",
  "Your laugh fixes bad days instantly",
  "You love geese and that says everything 🪿",
  "You’re always growing, never stagnant",
  "You feel safe to be around"
];

let reasonIndex = 0;
const reasonText = document.getElementById("reasonText");
const reasonBtn = document.getElementById("reasonBtn");

if (reasonBtn) {
  reasonBtn.addEventListener("click", () => {
    reasonText.textContent = reasons[reasonIndex];
    reasonIndex = (reasonIndex + 1) % reasons.length;
  });
}

// Easter egg: XXL → strawberry glow 🍓
let buffer = "";

document.addEventListener("keydown", (e) => {
  buffer += e.key.toUpperCase();
  buffer = buffer.slice(-3);

  if (buffer === "XXL") {
    document.body.classList.add("strawberry");

    setTimeout(() => {
      document.body.classList.remove("strawberry");
    }, 2500);
  }
});

