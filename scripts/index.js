let image = document.querySelector(".js-service-image");
let services = document.querySelector(".services");
let skills = document.querySelector(".skills-h2");
let skillsList = document.querySelector(".skill-list-ul");
let works = document.querySelector(".works-h2");
let workList = document.querySelector(".works-list");
let skillsSection = document.querySelector(".skills-section");

function scroll() {
  if (window.pageYOffset > 190) {
    image.style = "opacity:1";
    image.style = "transform: translateX(30px)";
    services.style = "opacity:1";
    services.style = "transform: translateX(40px)";
  }
  if (window.scrollY < 230) {
    image.style = "opacity:0";
    services.style = "opacity:0";
  }
  if (window.scrollY > 650) {
    skillsSection.style = "opacity:1";
    skillsSection.style = "transform: translateY(0px)";
  }
  if (window.scrollY < 700) {
    skillsSection.style = "opacity:0";
  }
}
window.addEventListener("scroll", scroll);
window.addEventListener("load", () => {
  image.style = "opacity:0";
  services.style = "opacity:0";
  skillsSection.style = "opacity:0";
});

function displaySkills() {
  skillsList.style.display = "contents";
  workList.innerHTML = "";
  skills.style.color = "orangered";
  works.style.color = "white";
}
skills.addEventListener("click", displaySkills);

let index;
let string = "coming soon, I will keep you posted";
let arr = string.split("");
console.log(arr);
function addLetter(index) {
  if (index < arr.length) {
    workList.innerHTML += arr[index];
  }
  setTimeout(() => {
    addLetter(index + 1);
  }, 500);
  index++;
}
function displayWorks() {
  skillsList.style.display = "none";
  skills.style.color = "white";
  works.style.color = "orangered";
  workList.innerHTML = "<h2>coming soon</h2><h2>I will keep you posted</h2>";
  // addLetter(0)
}
works.addEventListener("click", displayWorks);
