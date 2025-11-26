// Redirection vers STUDI
document.getElementById("studi-link").addEventListener("click", () => {
    window.open("https://studi.com/fr", "_blank");
  });
  
  // ***** MODE SOMBRE / MODE CLAIR *****
  const toggleBtn = document.getElementById("theme-toggle");
  
  // Charger le thème sauvegardé
  if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light-mode");
    toggleBtn.textContent = "☀️";
  }
  
  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
  
    if (document.body.classList.contains("light-mode")) {
      toggleBtn.textContent = "☀️";
      localStorage.setItem("theme", "light");
    } else {
      toggleBtn.textContent = "🌙";
      localStorage.setItem("theme", "dark");
    }
  });
  
  // ***** SCROLL ANIMÉ (REVEAL) *****
  const animatedElements = document.querySelectorAll(".fade-in, .fade-up");
  
  function reveal() {
    animatedElements.forEach(el => {
      const rect = el.getBoundingClientRect().top;
      const trigger = window.innerHeight - 100;
  
      if (rect < trigger) {
        el.classList.add("show");
      }
    });
  }
  
  window.addEventListener("scroll", reveal);
  reveal(); // Pour lancer au chargement
  