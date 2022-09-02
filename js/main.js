const navbarList = document.querySelector('.nav-list');

document.querySelector(".ham").onclick = () => {
  navbarList.classList.add("active");
}

document.querySelector(".close").onclick = () => {
  navbarList.classList.remove("active");
}


const body = document.querySelector('#body');

document.querySelector(".light-switch").onclick = () => {
  body.classList.remove("dark");
  localStorage.clear();
  localStorage.setItem("themeStatus", "light");
}

document.querySelector(".dark-switch").onclick = () => {
  body.classList.add("dark");
  localStorage.clear();
  localStorage.setItem("themeStatus", "dark");
}

if (localStorage.getItem("themeStatus") == "dark") {
  body.classList.add("dark");
}

if (localStorage.getItem("themeStatus") == "light") {
  body.classList.remove("dark");
}

