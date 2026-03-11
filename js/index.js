/* ========= FOOTER ========= */

const footer = document.querySelector(".footer-inner");
const today = new Date();
const thisYear = today.getFullYear();

footer.innerHTML = `<p>&copy; ${thisYear} Raz Ebrat | Portfolio Project</p>`;

/* ========= SKILLS ========= */

const skills = [
  {
    name: "HTML",
    logo: "https://img.shields.io/badge/HTML-E34F26?style=for-the-badge&logo=html5&logoColor=white",
  },
  {
    name: "CSS",
    logo: "https://img.shields.io/badge/CSS-1572B6?style=for-the-badge&logo=css3&logoColor=white",
  },
  {
    name: "JavaScript",
    logo: "https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black",
  },
  {
    name: "Git",
    logo: "https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white",
  },
  {
    name: "GitHub",
    logo: "https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white",
  },
  {
    name: "Java",
    logo: "https://img.shields.io/badge/Java-007396?style=for-the-badge&logo=openjdk&logoColor=white",
  },
  {
    name: "TestNG",
    logo: "https://img.shields.io/badge/TestNG-DC382D?style=for-the-badge&logoColor=white",
  },
  {
    name: "JUnit",
    logo: "https://img.shields.io/badge/JUnit-25A162?style=for-the-badge&logo=junit5&logoColor=white",
  },
  {
    name: "Cucumber",
    logo: "https://img.shields.io/badge/Cucumber-23D96C?style=for-the-badge&logo=cucumber&logoColor=white",
  },
  {
    name: "Jenkins",
    logo: "https://img.shields.io/badge/Jenkins-D24939?style=for-the-badge&logo=jenkins&logoColor=white",
  },
  {
    name: "Maven",
    logo: "https://img.shields.io/badge/Maven-C71A36?style=for-the-badge&logo=apachemaven&logoColor=white",
  },
];

const skillsList = document.getElementById("skills-list");
skillsList.innerHTML = "";

for (let i = 0; i < skills.length; i++) {
  const skill = document.createElement("li");
  skill.innerHTML = `
    <img src="${skills[i].logo}" alt="${skills[i].name} logo" class="skill-logo" />
  `;
  skillsList.appendChild(skill);
}

/* ========= MESSAGES ========= */

const messageForm = document.forms["leave_message"];
const messageSection = document.querySelector("#messages");
const messageList = messageSection.querySelector("ul");

messageForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const usersName = event.target.usersName.value;
  const usersEmail = event.target.usersEmail.value;
  const usersMessage = event.target.usersMessage.value;

  console.log(usersName, usersEmail, usersMessage);

  const newMessage = document.createElement("li");

  newMessage.innerHTML = `
    <a href="mailto:${usersEmail}">${usersName}</a>
    <span> ${usersMessage}</span>
  `;

  const removeButton = document.createElement("button");
  removeButton.innerText = "remove";
  removeButton.type = "button";

  removeButton.addEventListener("click", (e) => {
    const entry = e.target.parentNode;
    entry.remove();
  });

  newMessage.appendChild(removeButton);
  messageList.appendChild(newMessage);

  event.target.reset();
});

/* ========= PROJECTS ========= */

fetch("https://api.github.com/users/Raz-Ebrat/repos")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }
    return response.json();
  })
  .then((repositories) => {
    console.log("Repositories loaded:", repositories);

    const projectList = document.getElementById("project-list");
    projectList.innerHTML = "";

    for (let i = 0; i < repositories.length; i++) {
      if (
        repositories[i].name === "Raz-Ebrat-mars" ||
        repositories[i].name === "raz-open-api-project"
      ) {
        const project = document.createElement("li");
        const projectLink = document.createElement("a");

        projectLink.href = repositories[i].html_url;
        projectLink.target = "_blank";
        projectLink.rel = "noopener noreferrer";

        if (repositories[i].name === "Raz-Ebrat-mars") {
          projectLink.innerText = "Portfolio Project";
        } else if (repositories[i].name === "raz-open-api-project") {
          projectLink.innerText = "Open API Project";
        }

        project.appendChild(projectLink);
        projectList.appendChild(project);
      }
    }
  })
  .catch((error) => {
    console.error("Error fetching repositories:", error);

    const projectList = document.getElementById("project-list");
    projectList.innerHTML = "<li>Unable to load projects right now.</li>";
  });
