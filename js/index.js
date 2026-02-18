/* ========= FOOTER ========= */

// create footer
const footer = document.createElement("footer");

// add footer to body
document.body.appendChild(footer);

// get current year
const today = new Date();
const thisYear = today.getFullYear();

// create paragraph
const copyright = document.createElement("p");

// add dynamic text
copyright.innerHTML = `\u00A9 ${thisYear} Raz Ebrat`;

// add paragraph to footer
footer.appendChild(copyright);

/* ========= SKILLS ========= */

const skills = ["HTML", "CSS", "JavaScript", "GitHub"];

const skillsSection = document.getElementById("skills");
const skillsList = skillsSection.querySelector("ul");

for (let i = 0; i < skills.length; i++) {
  const skill = document.createElement("li");
  skill.innerText = skills[i];
  skillsList.appendChild(skill);
}
