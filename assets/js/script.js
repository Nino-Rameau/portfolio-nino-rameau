// menu burger

const buttonAction = document.querySelector(".menuToggle");
const navMain = document.querySelector(".navMain");

if (buttonAction) {
  buttonAction.addEventListener("click", function () {
    navMain.classList.toggle("MenuBurger");
  });
}

// mode clair / sombre

// recuperer les elt
const myButton = document.querySelector("#toogleBackground");
const body = document.querySelector("body");

// verifie btn
if (myButton) {
  // cree fonction pour changer background
  function toggleBackground() {
    body.classList.toggle("ClairSombre");
  }

  //ajoute un ecouteur d'evenement
  myButton.addEventListener("click", toggleBackground);
}
