const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

var toggleBtn = $(".header__navbar-toggle-btn");

toggleBtn.onclick = (e) => {
  var navbarList = $(".header__navbar-list");

  navbarList.classList.toggle("header__navbar-list--active");

  navbarListOverlay = navbarList.querySelector(".header__navbar-list-overlay");
  navbarListOverlay.onclick = (e) => {
    navbarList.classList.toggle("header__navbar-list--active");
  };
};
