// CTA button click handler
const ctaButtons = document.querySelectorAll('.cta-button');
ctaButtons.forEach(button => {
  button.addEventListener('click', () => {
    console.log('Book en demo clicked');
  });
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
