const Menu = document.getElementById("menuList");
const hamburger = document.getElementById("hamburger");
const icon = document.querySelector("i");
Menu.style.maxHeight = "0px";
function toggleMenu() {
    if (Menu.style.maxHeight === "0px") {
        Menu.style.maxHeight = "300px";
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-times");
    } else {
        Menu.style.maxHeight = "0px";
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
    }
}