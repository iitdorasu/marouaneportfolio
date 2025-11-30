// ----- Scroll Reveal Professionnel -----
const reveals = document.querySelectorAll('.reveal, .img');

function revealOnScroll() {
  reveals.forEach((el) => {
    const top = el.getBoundingClientRect().top;

    // Si l'élément apparaît dans la fenêtre
    if (top < window.innerHeight - 120) {
      el.classList.add('visible');
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll(); // Pour l'affichage initial


// ----- (Optionnel) Transition page fade -----
// Ajoute la classe "fade-body" à body pour transition entrée/sortie
document.body.classList.add("fade-in");

document.querySelectorAll("a").forEach((link) => {
  if (link.getAttribute("href") && !link.getAttribute("href").startsWith("#")) {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const url = link.href;
      document.body.classList.add("fade-out");
      setTimeout(() => {
        window.location.href = url;
      }, 300);
    });
  }
});


  
