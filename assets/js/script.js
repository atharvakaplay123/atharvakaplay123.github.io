window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY >= 70) {
    navbar.classList.add('shrink');
  } else {
    navbar.classList.remove('shrink');
  }
});
function all_skills() {
  no_skills_btn();
  document.getElementById("all_skills").style.color = "#ffffff"
  document.getElementById("all_skills").style.backgroundColor = "#0097b2"
  Array.from(document.getElementById("skills-grid").children).forEach((e) => {
    e.style.display = "unset";
  })
}
document.addEventListener('DOMContentLoaded', all_skills);
function no_skills() {
  Array.from(document.getElementById("skills-grid").children).forEach((e) => {
    e.style.display = "none";
  })
}
function no_skills_btn() {
  Array.from(document.getElementById("skill_btns").children).forEach((e) => {
    e.style.backgroundColor = "#000000"
    e.style.color = "#0097b2"
  })
}
function web_skills() {
  no_skills_btn();
  document.getElementById("web_skills").style.color = "#ffffff"
  document.getElementById("web_skills").style.backgroundColor = "#0097b2"
  no_skills();
  Array.from(document.getElementsByClassName("web-dev")).forEach((e) => {
    e.style.display = "unset";
  })
}
function lang_skills() {
  no_skills_btn();
  document.getElementById("lang_skills").style.color = "#ffffff"
  document.getElementById("lang_skills").style.backgroundColor = "#0097b2"
  no_skills();
  Array.from(document.getElementsByClassName("language")).forEach((e) => {
    e.style.display = "unset";
  })
}
function tools_skills() {
  no_skills_btn();
  document.getElementById("tools_skills").style.color = "#ffffff"
  document.getElementById("tools_skills").style.backgroundColor = "#0097b2"
  no_skills();
  Array.from(document.getElementsByClassName("tools")).forEach((e) => {
    e.style.display = "unset";
  })
}
function db_skills() {
  no_skills_btn();
  document.getElementById("db_skills").style.color = "#ffffff"
  document.getElementById("db_skills").style.backgroundColor = "#0097b2"
  no_skills();
  Array.from(document.getElementsByClassName("DB")).forEach((e) => {
    e.style.display = "unset";
  })
}
function linux_skills() {
  no_skills_btn();
  document.getElementById("linux_skills").style.color = "#ffffff"
  document.getElementById("linux_skills").style.backgroundColor = "#0097b2"
  no_skills();
  Array.from(document.getElementsByClassName("linux")).forEach((e) => {
    e.style.display = "unset";
  })
}
function robotics_skills() {
  no_skills_btn();
  document.getElementById("robotics_skills").style.color = "#ffffff"
  document.getElementById("robotics_skills").style.backgroundColor = "#0097b2"
  no_skills();
  Array.from(document.getElementsByClassName("robotics")).forEach((e) => {
    e.style.display = "unset";
  })
}