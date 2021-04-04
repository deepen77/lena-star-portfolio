const navBar = document.querySelector(".hamburger");
const navMobileItems = document.querySelector(".menu-list-mobile");
const menuItem = document.querySelectorAll(".menu-item");
const backroundImageMobile = document.querySelector(
  ".backgroundImage-lena-mobile"
);



navBar.addEventListener("click", () => {
  navBar.classList.toggle("is-active");
  navMobileItems.classList.toggle("open");
  if ((location.pathname == "/index.html") || (location.pathname == "/")) {
    backroundImageMobile.classList.toggle("open");
  }
});

function navSettings() {
  if ((location.pathname !== "/index.html") && (location.pathname !=="/")) {
    navMobileItems.classList.toggle("style");
    menuItem.forEach((li) => {
      li.classList.toggle("style");
    });
  } 
}

navSettings();


