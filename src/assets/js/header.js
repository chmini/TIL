const headerFetch = async () => {
    const response = await fetch("../assets/container/header.html");
    return response.text();
};

headerFetch().then((data) => {
    document.querySelector("header").innerHTML = data;
});
