function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
document.addEventListener("DOMContentLoaded", function () {
  const projects = document.querySelectorAll(".project");

  // Ensure only the first project is visible on page load
  projects.forEach((project, index) => {
      project.style.display = index === 0 ? "block" : "none";
  });

  // Attach event listeners to navigation buttons
  document.querySelectorAll(".nav-btn").forEach((button, index) => {
      button.addEventListener("click", function () {
          showProject(index);
      });
  });
});

// Function to show the selected project and hide others
function showProject(index) {
  const projects = document.querySelectorAll(".project");

  projects.forEach((project, i) => {
      project.style.display = i === index ? "block" : "none";
  });
}
