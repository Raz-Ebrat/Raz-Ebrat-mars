/* ========= FOOTER ========= */

// select existing footer
const footer = document.querySelector("footer");

// get current year
const today = new Date();
const thisYear = today.getFullYear();

// create or reuse copyright paragraph
let copyright = document.querySelector("#copyright");
if (!copyright) {
  copyright = document.createElement("p");
  copyright.id = "copyright";
  footer.appendChild(copyright);
}

// add dynamic year text
copyright.innerHTML = `\u00A9 ${thisYear} Raz Ebrat`;

/* ========= SKILLS ========= */

// array of skills
const skills = ["HTML", "CSS", "JavaScript", "GitHub"];

// select skills section list
const skillsSection = document.getElementById("skills");
const skillsList = skillsSection.querySelector("ul");

// add each skill to list
for (let i = 0; i < skills.length; i++) {
  const skill = document.createElement("li");
  skill.innerText = skills[i];
  skillsList.appendChild(skill);
}

/* ========= MESSAGES ========= */

// select form by name
const messageForm = document.forms["leave_message"];

// select messages section and list
const messageSection = document.querySelector("#messages");
const messageList = messageSection.querySelector("ul");

// handle form submit
messageForm.addEventListener("submit", (event) => {
  event.preventDefault(); // stop page refresh

  // get values from form fields
  const usersName = event.target.usersName.value;
  const usersEmail = event.target.usersEmail.value;
  const usersMessage = event.target.usersMessage.value;

  // create new message list item
  const newMessage = document.createElement("li");

  // add name (mailto link) and message text
  newMessage.innerHTML = `
    <a href="mailto:${usersEmail}">${usersName}</a>
    <span> ${usersMessage}</span>
  `;

  // create remove button
  const removeButton = document.createElement("button");
  removeButton.innerText = "remove";
  removeButton.type = "button";

  // remove message when button clicked
  removeButton.addEventListener("click", (e) => {
    const entry = e.target.parentNode;
    entry.remove();
  });

  // add button + message to list
  newMessage.appendChild(removeButton);
  messageList.appendChild(newMessage);

  event.target.reset(); // clear form
});
