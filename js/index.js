let burger = document.querySelector("header .burger-icon");
let mNav = document.querySelector(".mobile-nav");
let li = document.querySelectorAll(".mobile-nav ul li");
let a = document.querySelectorAll("header li a");
let shuffles = document.querySelectorAll(".projects .shuffle li");
let header = document.querySelector("header");

burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    if (burger.classList.contains("active") === true) {
        mNav.style.left = 0;
    } else {
        mNav.style.left = "100%";
    };
    li.forEach(li => {
        li.addEventListener("click", () => {
            burger.classList.remove("active");
            mNav.style.left = "100%";
        });
    });
});

a.forEach(ele => {
    ele.addEventListener("click", e => {
        a.forEach(ele => {
            ele.classList.remove("active");
        });
        e.currentTarget.classList.add("active");
    });
});

shuffles.forEach(ele => {
    ele.addEventListener("click", e => {
        shuffles.forEach(ele => {
            ele.classList.remove("active");
        });
        e.currentTarget.classList.add("active");
    });
});

window.onscroll = () => {
    if (window.scrollY >= 600) {
        header.classList.add("active");
    } else {
        header.classList.remove("active");
    };
};