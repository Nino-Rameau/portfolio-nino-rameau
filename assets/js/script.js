function toggleMobileNav() {
  const buttonAction = document.querySelector(".menu");
  const navMain = document.querySelector(".header-sommaire");

  if (buttonAction) {
    buttonAction.addEventListener("click", function () {
      navMain.classList.toggle("menu-open");
    });
  }
}

function toggleDarkMode() {
  const myButton = document.querySelector("#toogleBackground");
  const body = document.querySelector("body");
  const p = document.querySelectorAll("p");
  const h1 = document.querySelectorAll("h1");

  if (myButton) {
    function toggleBackground() {
      body.classList.toggle("ClairSombre");
      p.forEach((p) => {
        p.classList.toggle("ClairSombre");
      });

      h1.forEach((h1) => {
        h1.classList.toggle("ClairSombre");
      });
    }

    myButton.addEventListener("click", toggleBackground);
  }
}

window.addEventListener("DOMContentLoaded", function () {
  // Charge la gestion menu mobile
  toggleMobileNav();
  //Charger la gestion du darkmod
  toggleDarkMode();
});
