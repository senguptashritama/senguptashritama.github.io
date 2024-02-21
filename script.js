function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

window.addEventListener('resize', function() {
  adjustSizes();
});

window.addEventListener('DOMContentLoaded', function() {
  adjustSizes();
});

function adjustSizes() {
  var windowHeight = window.innerHeight;

  // Adjusting the height of the profile section to be 50% of the window height
  var profileSection = document.getElementById('profile');
  profileSection.style.height = (windowHeight * 0.8) + 'px';

  // Adjusting the height of the about section to be 40% of the window height
  var aboutSection = document.getElementById('about');
  aboutSection.style.height = (windowHeight * 0.9) + 'px';

  // Adjusting the height of the services section to be 60% of the window height
  var servicesSection = document.getElementById('Services');
  servicesSection.style.height = (windowHeight * 1) + 'px';

  // Adjusting the height of the projects section to be 70% of the window height
  var projectsSection = document.getElementById('projects');
  projectsSection.style.height = (windowHeight * 1) + 'px';

  // Adjusting the height of the contact section to be 30% of the window height
  var contactSection = document.getElementById('contact');
  contactSection.style.height = (windowHeight * 0.8) + 'px';
}
