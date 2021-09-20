const getMenuBtn = async () => {
    const menuBtn = await document.querySelector(".menu-btn");
};

const menuBtn = getMenuBtn();
menuBtn.then((res) => console.log(res));

/*
.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
});
*/
