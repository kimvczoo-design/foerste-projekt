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

// Horizontal scroll button functionality
const scrollLeftBtn = document.querySelector('.scroll-btn-left');
const scrollRightBtn = document.querySelector('.scroll-btn-right');
const featuresGrid = document.querySelector('.features-grid');

if (scrollLeftBtn && scrollRightBtn && featuresGrid) {
  const scrollAmount = 350; // Scroll by one card width

  scrollLeftBtn.addEventListener('click', () => {
    featuresGrid.scrollBy({
      left: -scrollAmount,
      behavior: 'smooth'
    });
  });

  scrollRightBtn.addEventListener('click', () => {
    featuresGrid.scrollBy({
      left: scrollAmount,
      behavior: 'smooth'
    });
  });
}
