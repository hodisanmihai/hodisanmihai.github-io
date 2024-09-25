let text = document.getElementById("text");
let leaf = document.getElementById("leaf");
let hill1 = document.getElementById("hill1");
let hill4 = document.getElementById("hill4");
let hill5 = document.getElementById("hill5");

window.addEventListener("scroll", () => {
  let value = window.scrollY;

  text.style.marginTop = value * 2.5 + "px";
  leaf.style.Top = value * -1.5 + "px";
  leaf.style.left = value * 1.5 + "px";
  hill5.style.left = value * 1.5 + "px";
  hill5.style.left = value * -1.5 + "px";
  hill4.style.top = value * -1 + "px";
});

let eo = document.getElementById("scroll-eo");
let etw = document.getElementById("scroll-etw");
let eth = document.getElementById("scroll-eth");
let etf = document.getElementById("scroll-etf");

function revealOnScroll() {
  let scrollPos = window.scrollY + window.innerHeight;

  function revealElement(element) {
    let elementPos = element.getBoundingClientRect().top + window.scrollY; //
    if (scrollPos > elementPos + 100) {
      element.style.opacity = 1;
      element.style.transform = "translateY(0px)";
    } else {
      element.style.opacity = 0;
      element.style.transform = "translateY(50px)";
    }
  }

  revealElement(eo);
  revealElement(etw);
  revealElement(eth);
  revealElement(etf);
}

window.addEventListener("scroll", revealOnScroll);

window.addEventListener("load", revealOnScroll);
