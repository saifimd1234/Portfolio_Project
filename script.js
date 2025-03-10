function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
  
  // Get the container element
const projectsContainer = document.querySelector('.projects-container');

// Set up auto-scroll using setInterval (adjust the speed and scroll step as desired)
let autoScrollInterval = setInterval(() => {
  // If at end, reset to beginning
  if (projectsContainer.scrollLeft + projectsContainer.clientWidth >= projectsContainer.scrollWidth) {
    projectsContainer.scrollLeft = 0;
  } else {
    projectsContainer.scrollBy({ left: 1, behavior: 'smooth' });
  }
}, 50); // Adjust this value for speed (lower = faster)

// Function to manually scroll left or right
function manualScroll(direction) {
  // Optional: clear the auto-scroll interval if you want to pause auto-scroll on manual click
  clearInterval(autoScrollInterval);

  // Scroll by 300 pixels (adjust as needed)
  projectsContainer.scrollBy({ left: direction * 300, behavior: 'smooth' });

  // Optionally restart auto-scroll after a delay
  setTimeout(() => {
    autoScrollInterval = setInterval(() => {
      if (projectsContainer.scrollLeft + projectsContainer.clientWidth >= projectsContainer.scrollWidth) {
        projectsContainer.scrollLeft = 0;
      } else {
        projectsContainer.scrollBy({ left: 1, behavior: 'smooth' });
      }
    }, 50);
  }, 3000); // Auto-resume after 3 seconds (adjust as desired)
}

// Attach click event listeners to arrow buttons
document.querySelector('.left-arrow').addEventListener('click', () => {
  manualScroll(-1); // Scroll left
});
document.querySelector('.right-arrow').addEventListener('click', () => {
  manualScroll(1); // Scroll right
});

document.addEventListener('DOMContentLoaded', function() {
    const projectsContainer = document.querySelector('.projects-container');
    if (!projectsContainer) return; // Ensure the container exists
  
    // Set up auto-scroll (adjust speed by changing 50 ms and scroll step by 1 pixel)
    let autoScrollInterval = setInterval(() => {
      if (projectsContainer.scrollLeft + projectsContainer.clientWidth >= projectsContainer.scrollWidth) {
        projectsContainer.scrollLeft = 0;
      } else {
        projectsContainer.scrollBy({ left: 1, behavior: 'smooth' });
      }
    }, 50);
  
    // Function to handle manual scroll
    function manualScroll(direction) {
      // Clear auto-scroll so manual scrolling takes precedence
      clearInterval(autoScrollInterval);
      // Scroll by 300 pixels (you can adjust this value)
      projectsContainer.scrollBy({ left: direction * 300, behavior: 'smooth' });
      // Restart auto-scroll after 3 seconds (adjust if desired)
      setTimeout(() => {
        autoScrollInterval = setInterval(() => {
          if (projectsContainer.scrollLeft + projectsContainer.clientWidth >= projectsContainer.scrollWidth) {
            projectsContainer.scrollLeft = 0;
          } else {
            projectsContainer.scrollBy({ left: 1, behavior: 'smooth' });
          }
        }, 50);
      }, 3000);
    }
  
    // Attach click event listeners to the arrow buttons
    const leftArrow = document.querySelector('.left-arrow');
    const rightArrow = document.querySelector('.right-arrow');
    if (leftArrow) {
      leftArrow.addEventListener('click', () => { manualScroll(-1); });
    }
    if (rightArrow) {
      rightArrow.addEventListener('click', () => { manualScroll(1); });
    }
  });
  