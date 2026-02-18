/*Add a Footer Elment*/
console.log("index.js is loaded ✅");
// 1. select the <body> element
const body = document.querySelector("body");

// 2. create a <footer> element
//const footer = document.createElement("footer");

// 3. Add text inside the footer
footer.innerHTML = "© 2026 Raz Ebrat";

// 4. Append footer to the body
body.appendChild(footer);

/* Insert Copyright Text in Footer */

// 1. create a date obj
const today = new Date();

// 2. get current year
const thisYear = today.getFullYear();

// 3. select the footer element from HTML
const footer = document.querySelector("footer");

// 4. create a paragraph
const copyright = document.createElement("p");

// 5. Add text
//copyright.innerHTML = `© ${thisYear} Raz Ebrat`;

/* STRETCH GOAL: Unicode copyright symbol (©)*/
copyright.innerHTML = `\u00A9 ${thisYear} Raz Ebrat`;

// 6. append to the footer
footer.appendChild(copyright);

// 7. create an array of skills
const skills = ["JavaScript", "HTML", "CSS", "Git", "GitHub"];

const skillsSection = document.querySelector("#skills");
const skillsList = skillsSection.querySelector("ul");

// 8. create a for loop
for (let i = 0; i < skills.length; i++) {
  const skill = document.createElement("li");
  skill.innerText = skills[i];
  skillsList.appendChild(skill);
}
