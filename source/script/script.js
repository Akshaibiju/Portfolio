
function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);


window.addEventListener('scroll', () => {
  document.body.style.setProperty('--scroll',window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
}, false);

if (document.getElementsByClassName("auto")) {
  var autos = document.getElementsByClassName("auto");
  for (var i=0; i<autos.length; i++) {
    autos[i].addEventListener("mouseover", autoOver);
    autos[i].addEventListener("mouseout", autoOut);
  }
}

function autoOver() {
  this.style.height = this.scrollHeight + "px";
}

function autoOut() {
  this.style.height = "20px";
}

let dev0 = document.getElementsByClassName("dev0")[0]
let dev1 = document.getElementsByClassName("dev1")[0]
let dev2 = document.getElementsByClassName("dev2")[0]
let dev3 = document.getElementsByClassName("dev3")[0]
let dev4 = document.getElementsByClassName("dev4")[0]
let dev5 = document.getElementsByClassName("dev5")[0]

dev0.addEventListener("click", () => {
  window.open("https://www.fiverr.com/akshaibiju286?");
})
dev1.addEventListener("click", () => {
  window.open("https://www.fiverr.com/akshaibiju286?");
})
dev2.addEventListener("click", () => {
  window.location.href= "#project" ;
})
dev3.addEventListener("click", () => {
  window.location.href= "#product" ;
})
dev4.addEventListener("click", () => {
  window.open("");
})
dev5.addEventListener("click", () => {
  window.open("https://www.instagram.com/akshai_biju_12/");
})

let social0 = document.getElementsByClassName("social0")[0]
let social1 = document.getElementsByClassName("social1")[0]
let social2 = document.getElementsByClassName("social2")[0]
let social3 = document.getElementsByClassName("social3")[0]
let social4 = document.getElementsByClassName("social4")[0]
let social5 = document.getElementsByClassName("social5")[0]


social0.addEventListener("click", () => {
  window.open("https://github.com/Akshaibiju/");
})
social1.addEventListener("click", () => {
  window.open("https://twitter.com/REDTECHWOLF1/");
})
social2.addEventListener("click", () => {
  window.open("https://www.facebook.com/permalink.php?story_fbid=159628316914114&id=100090781868461&substory_index=159628316914114");
})
social3.addEventListener("click", () => {
  window.open("https://www.fiverr.com/akshaibiju286?");
})
social4.addEventListener("click", () => {
  window.open("");
})
social5.addEventListener("click", () => {
  window.open("https://www.freelancer.com/u/akshaibiju732/");
})

function HireMe() {
  window.open('https://www.fiverr.com/akshaibiju286?');
}
