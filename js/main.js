const menuBtn = document.querySelector(".menu-btn");

const header = document.querySelector("header");
const main = document.querySelector("main");

menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
});
