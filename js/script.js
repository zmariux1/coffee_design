// selectează elementul .retractableEffect
const retractableEffect = document.querySelector('.retractableEffect');

// adaugă un eveniment de load pentru a declanșa efectul
window.addEventListener('load', () => {
  // setează width-ul la 0%
  retractableEffect.style.width = '0%';
});


// ===================== Scroll Reveal ===================== 


// Initialize ScrollReveal - with motion 
ScrollReveal({
  distance: "100px",
  duration: 2000,
  delay: 200
});

// Apply reveal animation to the .formTitle element
ScrollReveal().reveal(".heroContainer", { origin: "right" });
