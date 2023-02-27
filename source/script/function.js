let s1 = document.getElementsByClassName("s1")[0]
let s2 = document.getElementsByClassName("s2")[0]
let s3 = document.getElementsByClassName("s3")[0]
let s4 = document.getElementsByClassName("s4")[0]

s1.addEventListener("click", () => {
    window.open("https://github.com/Akshaibiju/custom-Home-Page/");
});
s2.addEventListener("click", () => {
    window.open("https://github.com/Akshaibiju/LOTO-BAZAAR/");
});
s3.addEventListener("click", () => {
    window.open("https://github.com/Akshaibiju/Twitter/");
});
s4.addEventListener("click", () => {
    window.open("https://github.com/Akshaibiju/Google.com/");
});

let avatar = document.getElementsByClassName("avatar")[0]
let navbar = document.getElementsByClassName("navbar")[0]
let writings = document.getElementsByClassName("writings")[0]


avatar.addEventListener("click", () => {
    if(navbar.style.background == "black") {
        navbar.style.background = "#a7a7a7";
        writings.style.background = "#a7a7a7";
        writings.style.color = "black"
    }
    else {
        navbar.style.background = "black";
        writings.style.background = "black";
        writings.style.color = "white"
    }
    
});
