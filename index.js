var activePage = "home";

function hide(id) {
  console.info("hide", id);
  document.getElementById(id).style.display = "none";
}

function show(id) {
  console.info("show", id);
  var page = document.getElementById(id);
  console.debug("show page", page);
  page.style.display = "block";
}

function showPage(id) {
  console.info("show page", id);
  hide(activePage);
  show(id);
  activePage = id;
}

function initEvents() {
  var toolbar = document.querySelector("#top-menu-bar");
  toolbar.addEventListener("click", function (e) {
    if (e.target.matches("a")) {
      var page = e.target.textContent.toLowerCase();
      console.warn("click", page);
      showPage(page);
    }
  });
}

function showSkills() {
  var ul = document.querySelector("#skills ul");

  var skills = [
    { name: "HTML", endorcements: 6, favorite: true },
    { name: "CSS", endorcements: 5 },
    { name: "JS", endorcements: 7, favorite: true },
    { name: "Word", endorcements: 1, favorite: false },
  ];

  var text = skills.map(function (skill) {
    var cls = skill.favorite ? "favorite" : "";
    return `<li class="${cls}">${skill.name} <span> - ${skill.endorcements}</span></li>`;
  });

  ul.innerHTML = text.join("");
}

showSkills();
showPage(activePage);
initEvents();
