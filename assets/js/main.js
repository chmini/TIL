const menuBtn = await document.querySelector(".menu-btn");

menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
});
