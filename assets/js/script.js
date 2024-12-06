// menu burger

const buttonAction = document.querySelector(".menu");
const navMain = document.querySelector(".header-sommaire");

if (buttonAction) {
  buttonAction.addEventListener("click", function () {
    navMain.classList.toggle("menu-open");
  });
}
