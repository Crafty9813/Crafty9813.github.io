function showSection(sectionId, clickedButton) {
  const sections = document.querySelectorAll('.section');
  const filters = document.querySelectorAll('.filter');

  sections.forEach(section => {
    section.classList.remove('active');
  });

  filters.forEach(filter => {
    filter.classList.remove('active');
    filter.setAttribute('aria-pressed', 'false');
  });

  document.getElementById(sectionId).classList.add('active');
  clickedButton.classList.add('active');
  clickedButton.setAttribute('aria-pressed', 'true');
}