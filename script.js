document.addEventListener("DOMContentLoaded", function () {

  const password = "rose2026"; // 🔑 mot de passe que tu choisis
  const passInput = document.getElementById("passInput");
  const passBtn = document.getElementById("passBtn");
  const errorMsg = document.getElementById("errorMsg");
  const passwordContainer = document.getElementById("passwordContainer");
  const loveContainer = document.getElementById("loveContainer");

  passBtn.addEventListener("click", () => {
    if (passInput.value === password) {
      passwordContainer.classList.add("hidden");
      loveContainer.classList.remove("hidden");
    } else {
      errorMsg.style.display = "block";
    }
  });

  // === ton code original des coeurs ===
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

});
