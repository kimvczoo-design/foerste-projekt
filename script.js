console.log("Mit første projekt kører 🎉");

const btn = document.getElementById("cta");
if (btn) {
  btn.addEventListener("click", () => {
    console.log("Hej fra Kim 👋");
  });
}

// Typewriter effect for the hero heading on page load
document.addEventListener('DOMContentLoaded', () => {
  const h2 = document.querySelector('.site-header .hero-overlay h2');
  if (!h2) return;
  const fullText = h2.textContent.trim();
  h2.textContent = '';
  h2.classList.add('typing');

  const speed = 60; // ms per character
  let index = 0;
  const typer = setInterval(() => {
    h2.textContent += fullText.charAt(index) || '';
    index += 1;
    if (index > fullText.length) {
      clearInterval(typer);
      // keep caret blinking briefly then remove
      setTimeout(() => h2.classList.remove('typing'), 800);
    }
  }, speed);
});
