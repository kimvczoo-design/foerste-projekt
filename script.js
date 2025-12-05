// Mouse drag scrolling for features grid
const featuresGrid = document.querySelector('.features-grid');

if (featuresGrid) {
  let isDown = false;
  let startX;
  let scrollLeft;

  featuresGrid.addEventListener('mousedown', (e) => {
    isDown = true;
    featuresGrid.classList.add('dragging');
    startX = e.pageX - featuresGrid.offsetLeft;
    scrollLeft = featuresGrid.scrollLeft;
  });

  featuresGrid.addEventListener('mouseleave', () => {
    isDown = false;
    featuresGrid.classList.remove('dragging');
  });

  featuresGrid.addEventListener('mouseup', () => {
    isDown = false;
    featuresGrid.classList.remove('dragging');
  });

  featuresGrid.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - featuresGrid.offsetLeft;
    const walk = (x - startX) * 1;
    featuresGrid.scrollLeft = scrollLeft - walk;
  });
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    if (this.getAttribute('href') !== '#') {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
});

// CTA buttons
const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
  button.addEventListener('click', function() {
    console.log('Button clicked:', this.textContent);
  });
});

// Mouse drag scrolling for features grid
const featuresGrid = document.querySelector('.features-grid');

if (featuresGrid) {
  let isDown = false;
  let startX;
  let scrollLeft;

  featuresGrid.addEventListener('mousedown', (e) => {
    isDown = true;
    featuresGrid.classList.add('dragging');
    startX = e.pageX - featuresGrid.offsetLeft;
    scrollLeft = featuresGrid.scrollLeft;
  });

  featuresGrid.addEventListener('mouseleave', () => {
    isDown = false;
    featuresGrid.classList.remove('dragging');
  });

  featuresGrid.addEventListener('mouseup', () => {
    isDown = false;
    featuresGrid.classList.remove('dragging');
  });

  featuresGrid.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - featuresGrid.offsetLeft;
    const walk = (x - startX) * 1; // Scroll speed
    featuresGrid.scrollLeft = scrollLeft - walk;
  });
}
