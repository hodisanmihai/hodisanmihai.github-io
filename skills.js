let web = document.getElementById("scroll-web");
let ux = document.getElementById("scroll-ux");
let problem = document.getElementById("scroll-problem");
let communication = document.getElementById("scroll-communication");
let skill = document.getElementById("scroll-skill");

function revealOnScroll() {
  let scrollPos = window.scrollY + window.innerHeight;

  function revealElement(element) {
    let elementPos = element.getBoundingClientRect().top + window.scrollY;
    if (scrollPos > elementPos + 100) {
      element.style.opacity = 1;
      element.style.transform = "translateY(0px)";

      const semiDonuts = element.querySelectorAll(".semi-donut");
      setTimeout(() => {
        semiDonuts.forEach((donut) => {
          donut.classList.add("animate-semi-donut");
        });
      }, 200);
    } else {
      element.style.opacity = 0;
      element.style.transform = "translateY(50px)";
      const semiDonuts = element.querySelectorAll(".semi-donut");
      semiDonuts.forEach((donut) => {
        donut.classList.remove("animate-semi-donut");
      });
    }
  }

  revealElement(web);
  revealElement(ux);
  revealElement(problem);
  revealElement(communication);
  revealElement(skill);
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);
