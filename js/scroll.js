window.addEventListener('scroll', function() {
  const scrollPoint = document.getElementById('scroll-point');
  const sections = document.querySelectorAll('section');
  const rect = scrollPoint.getBoundingClientRect();

  if (rect.top < window.innerHeight) {
      // Add 'in-view' when the scroll point is within or above the viewport
      sections.forEach(section => {
          section.classList.add('in-view');
          const sectionTextElements = section.querySelectorAll('h2, p, a, div');
          sectionTextElements.forEach(element => {
              element.classList.add('in-view');
          });
      });
  } else {
      // Remove 'in-view' when the scroll point moves back below the viewport
      sections.forEach(section => {
          section.classList.remove('in-view');
          const sectionTextElements = section.querySelectorAll('h2, p, a, div');
          sectionTextElements.forEach(element => {
              element.classList.remove('in-view');
          });
      });
  }
});
