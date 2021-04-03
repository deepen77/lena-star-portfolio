const navBar = document.querySelector(".hamburger");
const navMobileItems = document.querySelector(".menu-list-mobile");
const backroundImageMobile = document.querySelector(".backgroundImage-lena-mobile");

navBar.addEventListener("click", () => {
  navBar.classList.toggle("is-active");
  navMobileItems.classList.toggle("open");
  backroundImageMobile.classList.toggle("open");

});

// const navItems = document.querySelectorAll(".nav_item");

// if (window.innerWidth < 767) {
//   navItems.forEach((navItem) => {
//     navItem.addEventListener("click", () => {
//       navBar.classList.toggle("is-active");
//       navMobileItems.classList.toggle("open");
//     });
//   });
// }

// const navLogo = document.querySelector(".nav_logo");

// if (window.innerWidth < 767) {
//   navLogo.addEventListener("click", () => {
//     navBar.classList.toggle("is-active");
//     navMobileItems.classList.toggle("open");
//   });
// }
