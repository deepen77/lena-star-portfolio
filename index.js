const navBar = document.querySelector(".hamburger");
const navMobileItems = document.querySelector(".menu-list-mobile");
const menuItem = document.querySelectorAll(".menu-item");
const backroundImageMobile = document.querySelector(".backgroundImage-lena-mobile");


const contactForm = document.querySelector(".contact-form");
let name = document.getElementById("name");
let email = document.getElementById("email");
let subject = document.getElementById("subject");
let message = document.getElementById("message");

const modalMessageError = document.querySelector(".modal-message-error");
const closeModalError = document.querySelector(".close-modal");

const modalMessageSuccess = document.querySelector(".modal-message-success");
const closeModalSuccess = document.querySelector(".close-modal-success");



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



closeModalError.addEventListener('click', () => {
  modalMessageError.classList.toggle("open-modal-message-error");
})

closeModalSuccess.addEventListener("click", () => {
  modalMessageSuccess.classList.toggle("open-modal-message-success");
});


