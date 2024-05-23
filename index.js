var activePage = "home";

function hide(id) {
  document.getElementById(id).style.display = "none";
}

function show(id) {
  var page = document.getElementById(id);
  page.style.display = "block";
}

function showPage(id) {
  hide(activePage);
  show(id);
  activePage = id;
}

function initEvents() {
  var toolbar = document.querySelector("#top-menu-bar");
  toolbar.addEventListener("click", function (e) {
    if (e.target.matches("a")) {
      var page = e.target.textContent.toLowerCase();
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

  var text = skills.map(function (skill)