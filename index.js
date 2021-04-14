const navBar = document.querySelector(".hamburger");
const navMobileItems = document.querySelector(".menu-list-mobile");
const menuItem = document.querySelectorAll(".menu-item");
const backroundImageMobile = document.querySelector(".backgroundImage-lena-mobile");


const contactForm = document.querySelector(".contact-form");
let name = document.getElementById("name");
let email = document.getElementById("email");
let subject = document.getElementById("subject");
let message = document.getElementById("message");





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


contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let formData = {
    name: name.value,
    email: email.value,
    subject: subject.value,
    message: message.value,
  };

  let xhr = new XMLHttpRequest();
  xhr.open("POST", "/");
  xhr.setRequestHeader("content-type", "application/json");
  xhr.onload = function () {
    console.log(xhr.responseText);
    if (xhr.responseText == "success") {
      alert("Email sent");
      name.value = "";
      email.value = "";
      subject.value = "";
      message.value = "";
    } else {
      alert("Something went wrong!");
    }
  };

  xhr.send(JSON.stringify(formData));
});