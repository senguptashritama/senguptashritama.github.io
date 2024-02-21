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
  var windowWidth = window.innerWidth;
  var windowHeight = window.innerHeight;

  // Padding or margin to create space between sections
  var sectionPadding = 20;

  // Calculate maximum allowable width and height for sections
  var maxWidth = windowWidth - (2 * sectionPadding);
  var maxHeight = windowHeight - (2 * sectionPadding);

  // Adjusting the height and width of the profile section
  var profileSection = document.getElementById('profile');
  profileSection.style.height = Math.min(maxHeight * 0.8, 600) + 'px'; // Limiting height to 500px
  profileSection.style.width = Math.min(maxWidth, 1200) + 'px'; // Limiting width to 800px
  aboutSection.style.margin = '0 auto'
  adjustBoxSizes(contactSection);

  // Adjusting the height and width of the about section
  var aboutSection = document.getElementById('about');
  aboutSection.style.height = Math.min(maxHeight * 1.1, 950) + 'px'; // Limiting height to 400px
  aboutSection.style.width = Math.min(maxWidth, 1200) + 'px'; // Limiting width to 800px
  aboutSection.style.margin = '0 auto';
  adjustBoxSizes(contactSection);

  // Adjusting the height and width of the services section
  var servicesSection = document.getElementById('Services');
  servicesSection.style.height = Math.min(maxHeight * 1.1, 800) + 'px'; // Limiting height to 600px
  servicesSection.style.width = Math.min(maxWidth, 1200) + 'px'; // Limiting width to 800px
  aboutSection.style.margin = '0 auto'
  adjustBoxSizes(contactSection);

  // Adjusting the height and width of the projects section
  var projectsSection = document.getElementById('projects');
  projectsSection.style.height = Math.min(maxHeight * 1.1, 900) + 'px'; // Limiting height to 700px
  projectsSection.style.width = Math.min(maxWidth, 1200) + 'px'; // Limiting width to 800px
  aboutSection.style.margin = '0 auto'
  adjustBoxSizes(contactSection);

  // Adjusting the height and width of the contact section
  var contactSection = document.getElementById('contact');
  contactSection.style.height = Math.min(maxHeight * 1.1, 400) + 'px'; // Limiting height to 300px
  contactSection.style.width = Math.min(maxWidth, 1200) + 'px'; // Limiting width to 800px
  aboutSection.style.margin = '0 auto'
  adjustBoxSizes(contactSection);
}

function adjustBoxSizes(section) {
  var boxes = section.querySelectorAll('.details-container');
  var boxWidth = (section.offsetWidth - 20) / 2; // Calculate width for two columns

  boxes.forEach(function(box) {
    box.style.width = boxWidth + 'px';
  });
}
