var activePage = "home";

function show(id) {
  var page = document.getElementById(id);
  if (page) {
    page.style.display = "block";
  }
}

function hide(id) {
  var page = document.getElementById(id);
  if (page) {
    page.style.display = "none";
  }
}

function showPage(pageId) {
  hide(activePage);
  show(pageId);
  activePage = pageId;
}

show(activePage);
