import { projects } from "./projects.js";

const puttBall = document.querySelector(".putt > img");
const puttLabel = document.querySelector(".putt-label");

function putt() {
  puttBall.classList.add("roll");
  puttLabel.style.display = "none";
  setTimeout(() => (document.querySelector(".card1").style.opacity = "1"), 500);
  setTimeout(
    () => (document.querySelector(".card2").style.opacity = "1"),
    1000
  );
  setTimeout(
    () => (document.querySelector(".card3").style.opacity = "1"),
    1500
  );
}

puttBall.addEventListener("click", putt);

const modal = document.getElementById("projectModal");

const close = document.querySelector(".close");

function openModal(project) {
  // Populate modal with project details
  document.getElementById("projectImage").src = project.image;
  document.getElementById("projectTitle").innerText = project.name;
  document.getElementById("projectDescription").innerText = project.description;

  // Clear old technologies and add new ones
  var technologiesList = document.getElementById("projectTechnologies");
  technologiesList.innerHTML = ""; // Clear existing list
  project.technologies.forEach(function (tech) {
    var li = document.createElement("li");
    li.textContent = tech;
    technologiesList.appendChild(li);
  });

  // Set GitHub link
  document.getElementById("githubLink").href = project.github;

  modal.style.display = "block";
}

function closeModal() {
  modal.style.display = "none";
}

close.addEventListener("click", closeModal);
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

document.querySelectorAll(".project-card").forEach(function (card, index) {
  card.addEventListener("click", function () {
    openModal(projects[index]);
  });
});
