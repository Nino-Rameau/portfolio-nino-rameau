function toggleMobileNav() {
  const buttonAction = document.querySelector(".menu");
  const navMain = document.querySelector("nav");

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

window.addEventListener("DOMContentLoaded", function () {
  // Charge la gestion menu mobile
  toggleMobileNav();
  //Charger la gestion du darkmod
  toggleDarkMode();
});
