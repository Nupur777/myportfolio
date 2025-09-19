// Hero CTA animation
// Hero CTA animation
document.addEventListener("DOMContentLoaded", () => {
  const cta = document.querySelector(".hero .btn");
  if (cta) {
    cta.style.opacity = 0;
    cta.style.transform = "translateY(10px)";
    cta.style.transition = "opacity 0.8s ease, transform 0.8s ease";
    setTimeout(() => {
      cta.style.opacity = 1;
      cta.style.transform = "translateY(0)";
    }, 300);
  }
});
console.log("Hello");

// Mobile nav toggle
document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".nav");
  if (navToggle && nav) {
    navToggle.addEventListener("click", () => {
      nav.classList.toggle("open");
    });
  }
});
