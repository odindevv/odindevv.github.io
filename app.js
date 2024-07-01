const menuMobileIcon = document.getElementById("menu--mobile");
const menuMobile = document.querySelector(".header__nav--mobile");
const navLinks = document.querySelectorAll(".nav__li--link");

var show = false;
menuMobileIcon.addEventListener("click", (e) => {
  show = !show;
  show
    ? (menuMobile.style.display = "flex")
    : (menuMobile.style.display = "none");
});

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    show = false;
    menuMobile.style.display = "none";
  });
});

setTimeout(() => {
  document.body.classList.add("show-content");
  document.querySelector(".overlay").style.display = "none";
  document.body.style.overflow = "auto";
}, 1500);
