var buttonOpen = document.querySelector(".page-header__toggle--opened");
var buttonClose = document.querySelector(".page-header__toggle--closed");
var menu = document.querySelector(".main-nav");

buttonClose.addEventListener("click", function () {
  buttonClose.classList.remove("page-header__toggle--closed");
  buttonClose.classList.add("page-header__toggle--opened");
  menu.classList.add("main-nav-opened");
});
