var activePage = "home";

function show(id) {
  console.info("show", id);
  var page = document.getElementById(id);
  console.info("page", page);
  page.style.display = "block";
}

function hide(id) {
  console.info("hide", id);
  document.getElementById(id).style.display = "none";
}

function showPage(id) {
  console.info("show page", id);
  hide(activePage);
  show(id);
  activePage = id;
}

function showSkills() {
  var ul = document.querySelector("skills ul");
  ul.innerHTML = "<li>HTMl</li>";
  ul.innerHTML = "<li>CSS</li>";
  ul.innerHTML = "<li>JS</li>";
