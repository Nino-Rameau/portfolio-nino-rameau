
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
  console.log("Dark mode function");
}

window.addEventListener("DOMContentLoaded", function () {
  // Charge la gestion menu mobile
  toggleMobileNav();
  //Charger la gestion du darkmod
  toggleDarkMode();
});
