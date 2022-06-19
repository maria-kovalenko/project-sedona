const buttonOpen = document.querySelector(".page-header__toggle--opened");
const buttonClose = document.querySelector(".page-header__toggle--closed");
const menu = document.querySelector(".main-nav");

let condition = "close";

buttonClose.addEventListener("click", function () {
  if (condition === "close") {
    buttonClose.classList.remove("page-header__toggle--closed");
    buttonClose.classList.add("page-header__toggle--opened");
    menu.classList.add("main-nav-opened");
    condition = "open";
  } else {
    buttonClose.classList.remove("page-header__toggle--opened");
    buttonClose.classList.add("page-header__toggle--closed");
    menu.classList.remove("main-nav-opened");
    condition = "close";
  }
});
