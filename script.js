// Mouse / touch drag scrolling for features grid
(() => {
  const grid = document.querySelector('.features-grid');
  if (!grid) return;

  let isDown = false;
  let startX = 0;
  let scrollLeft = 0;

  const startDrag = (clientX) => {
    isDown = true;
    grid.classList.add('dragging');
    startX = clientX - grid.getBoundingClientRect().left;
    scrollLeft = grid.scrollLeft;
  };

  const endDrag = () => {
    isDown = false;
    grid.classList.remove('dragging');
  };

  const moveDrag = (clientX) => {
    if (!isDown) return;
    const x = clientX - grid.getBoundingClientRect().left;
    const walk = x - startX;
    grid.scrollLeft = scrollLeft - walk;
  };

  grid.addEventListener('mousedown', (e) => {
    if (e.button !== 0) return;
    e.preventDefault();
    startDrag(e.clientX);
  });

  grid.addEventListener('mouseup', endDrag);
  grid.addEventListener('mouseleave', endDrag);

  grid.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    moveDrag(e.clientX);
  });

  // Touch support
  grid.addEventListener('touchstart', (e) => {
    const touch = e.touches[0];
    startDrag(touch.clientX);
  }, { passive: true });

  grid.addEventListener('touchend', endDrag, { passive: true });
  grid.addEventListener('touchcancel', endDrag, { passive: true });

  grid.addEventListener('touchmove', (e) => {
    if (!isDown) return;
    const touch = e.touches[0];
    moveDrag(touch.clientX);
  }, { passive: true });
})();

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
