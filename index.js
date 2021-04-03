var swiper = new Swiper(".swiper-container", {
  pagination: {
    el: ".swiper-pagination",
  },
});

const navBar = document.querySelector(".hamburger");
const navMobileItems = document.querySelector(".menu-list-mobile");
const backroundImageMobile = document.querySelector(
  ".backgroundImage-lena-mobile"
);

navBar.addEventListener("click", () => {
  navBar.classList.toggle("is-active");
  navMobileItems.classList.toggle("open");
  backroundImageMobile.classList.toggle("open");
});

let modalContainer = document.querySelector(".swiper-container");
let modal = document.querySelector(".swiper-wrapper");
const button = document.querySelectorAll(".gallery img");
const buttonClose = document.querySelector(".fa-window-close");

// function openModal() {
//   modalContainer.classList.add("open");
//   modal.classList.add("show");
//   modal.classList.remove("close");
//   swiper.update();
// }

for (let i = 0; i < button.length; i++) {
  button[i].addEventListener("click", (e) => {
  modalContainer.classList.add("open");
  modal.classList.add("show");
  modal.classList.remove("close");
  // var $invoker = $(e.relatedTarget);
  // swiper.slideTo($invoker.data("slider"));
  swiper.update();
})
}


function closeModal() {
  modal.classList.remove("show");
  modal.classList.add("close");
  modalContainer.classList.remove("open");
  swiper.update();
  // setTimeout(() => modalContainer.classList.remove("open"), 500);
}

// button.addEventListener("click", openModal);
buttonClose.addEventListener("click", closeModal);

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
