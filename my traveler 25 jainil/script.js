// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Button scroll to destinations
document.getElementById('explore-btn').addEventListener('click', () => {
  document.getElementById('destinations').scrollIntoView({ behavior: 'smooth' });
});