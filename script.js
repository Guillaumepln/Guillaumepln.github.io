
const button = document.getElementById("loveBtn");
const message = document.getElementById("message");

button.addEventListener("click", () => {
  message.classList.remove("hidden");
  for (let i = 0; i < 10; i++) {
  setTimeout(createHeart, i * 200);
  }
});

function createHeart() {
  const heart = document.createElement("div");
  heart.innerHTML = "❤️";
  heart.style.position = "absolute";
  heart.style.left = Math.random() * window.innerWidth + "px";
  heart.style.top = window.innerHeight + "px";
  heart.style.fontSize = (20 + Math.random() * 30) + "px";
  heart.style.animation = "float 4s linear";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 4000);
}

const style = document.createElement("style");
style.innerHTML = `
@keyframes float {
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(-800px);
    opacity: 0;
  }
}
`;
document.head.appendChild(style);
