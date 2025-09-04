setInterval(() => {
  scrollY += 1;
  window.scrollTo({ top: scrollY, behavior: 'smooth' });
}, 50);
let scrollY = 0;
