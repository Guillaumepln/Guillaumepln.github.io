document.addEventListener("DOMContentLoaded", function () {

  // === MOT DE PASSE ===
  const password = "rose2026"; 
  const passInput = document.getElementById("passInput");
  const passBtn = document.getElementById("passBtn");
  const errorMsg = document.getElementById("errorMsg");
  const passwordContainer = document.getElementById("passwordContainer");
  const loveContainer = document.getElementById("loveContainer");

  passBtn.addEventListener("click", () => {
    if (passInput.value === password) {
      // cacher le formulaire mot de passe
      passwordContainer.classList.add("hidden");
      loveContainer.classList.remove("hidden");

      // changer le fond en rose
      document.body.classList.add("rose-bg");
    } else {
      // afficher le message d'erreur
      errorMsg.classList.remove("hidden");
    }
  });

  // === BOUTON “CLIQUE ICI ❤️” ===
  const loveBtn = document.getElementById("loveBtn");
  const message = document.getElementById("message");

  loveBtn.addEventListener("click", () => {
    message.classList.remove("hidden");

    // Créer 10 cœurs en cascade
    for (let i = 0; i < 10; i++) {
      setTimeout(createHeart, i * 200);
    }
  });

  // === FONCTION POUR LES CŒURS ===
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

  // === AJOUT DE L'ANIMATION FLOAT POUR LES CŒURS ===
  const style = document.createElement("style");
  style.innerHTML = `
  @keyframes float {
    from { transform: translateY(0); opacity: 1; }
    to { transform: translateY(-800px); opacity: 0; }
  }`;
  document.head.appendChild(style);

});
