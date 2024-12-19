function toggleMobileNav() {
  const buttonAction = document.querySelector(".menu");
  const navMain = document.querySelector("header");

  if (buttonAction) {
    buttonAction.addEventListener("click", function () {
      navMain.classList.toggle("menu-open");
    });
  }
}

function toggleDarkMode() {
  const myButton = document.querySelector("#toogleBackground");
  const body = document.querySelector("body");

  if (localStorage.getItem("darkMode") === "enabled") {
    body.classList.add("ClairSombre");
  }

  if (myButton) {
    function toggleBackground() {
      body.classList.toggle("ClairSombre");

      localStorage.setItem(
        "darkMode",
        body.classList.contains("ClairSombre") ? "enabled" : "disabled"
      );
    }
  }

  myButton.addEventListener("click", toggleBackground);
}

function carrousel() {
  "use strict";

  // Sélectionner tous les carrousels
  const carrousels = document.querySelectorAll(".container-carrousel");

  // Initialiser chaque carrousel
  carrousels.forEach((carousel) => {
    const diapos = carousel.querySelectorAll(".diapo");
    const conteneurPoints = carousel.querySelector(".points-navigation");
    const boutonPrecedent = carousel.querySelector(".precedent");
    const boutonSuivant = carousel.querySelector(".suivant");
    let diaposActuelle = 0;

    // Créer les points de navigation
    diapos.forEach(() => {
      const point = document.createElement("span");
      point.classList.add("point");
      conteneurPoints.appendChild(point);
    });

    const points = conteneurPoints.querySelectorAll(".point");

    function afficherDiapo(index) {
      diaposActuelle = index;
      diapos.forEach(
        (diapo) =>
          (diapo.style.transform = `translateX(-${diaposActuelle * 100}%)`)
      );
      points.forEach((point, i) => {
        point.classList.toggle("actif", i === diaposActuelle);
      });
    }

    boutonSuivant.addEventListener("click", () => {
      if (diaposActuelle < diapos.length - 1) {
        afficherDiapo(diaposActuelle + 1);
      } else {
        afficherDiapo(0);
      }
    });

    boutonPrecedent.addEventListener("click", () => {
      if (diaposActuelle > 0) {
        afficherDiapo(diaposActuelle - 1);
      } else {
        afficherDiapo(diapos.length - 1);
      }
    });

    points.forEach((point, index) => {
      point.addEventListener("click", () => afficherDiapo(index));
    });

    afficherDiapo(0);
  });
}

window.addEventListener("DOMContentLoaded", function () {
  // Charge la gestion menu mobile
  toggleMobileNav();
  //Charger la gestion du darkmod
  toggleDarkMode();
  // carrousel
  carrousel();
});
