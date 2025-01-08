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

function animer() {
  var txt = document.querySelector(".txt-animer"); // zone ou est affiché le texte
  if (!txt) {
    console.error("erreur texte animer");
    return;
  }
  var texteComplet = "Nino Rameau"; // Texte à afficher
  var texte = ""; // texte en cours d'affichage
  var effacer = false; // false ou vrai pour texte en cours ou non d'effacement

  function animation() {
    if (effacer) {
      //substring(debut, fin) : Permet d'extraire une partie d'un 'str'.
      texte = texteComplet.substring(0, texte.length - 1); // Suppression de caractères
    } else {
      texte = texteComplet.substring(0, texte.length + 1); // Ajout de caractères
    }

    txt.innerHTML = texte; // renvoie le texte en cours

    if (!effacer && texte === texteComplet) {
      // si le texte est en cours d'ecriture est est complet
      setTimeout(() => (effacer = true), 2000); //  alors l'ecriture est terminé et on declenche le délai pour ensuite effacer le texte
      // 2000ms avant debut pour effacer
    } else if (effacer && texte === "") {
      // si le texte s'efface et est vide
      effacer = false; // on recommencer à écrire
      setTimeout(animation, 500); // on declenche un delais de 500ms avant d'ecrire
      return; // on termine la fonction
    }

    setTimeout(animation, effacer ? 150 : 200); // Délai entre chaque étape effacement 150ms et ecriture 200ms
  }

  animation(); // rappel la fonction pour créer un boucle
}

window.addEventListener("DOMContentLoaded", function () {
  // Charge la gestion menu mobile
  toggleMobileNav();
  //Charger la gestion du darkmod
  toggleDarkMode();
  // carrousel
  carrousel();
  // nom animer
  animer();
});
