const roles = [
  "Web Designer",
  "Graphic Designer",
  "UI/UX Designer",
  "Front-End Developer",
];
let index = 0;

function changeRole() {
  const element = document.getElementById("dynamic-role");
  element.classList.add("fade-out");

  setTimeout(() => {
    element.textContent = roles[index];
    element.classList.remove("fade-out");
    index = (index + 1) % roles.length;
  }, 500);
}

setInterval(changeRole, 2500);
