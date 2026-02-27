// HUD scroll
const hud = document.querySelector('.hud-bg svg');
window.addEventListener('scroll', () => {
  const s = window.scrollY;
  hud.style.transform = `rotate(${s * 0.03}deg) scale(${1 + s * 0.0003})`;
});

// Slider
const slides = document.querySelectorAll('.slide');
let current = 0;
setInterval(() => {
  slides[current].classList.remove('active');
  current = (current + 1) % slides.length;
  slides[current].classList.add('active');
}, 4000);

// Theme toggle
const body = document.body;
const toggleBtn = document.getElementById('theme-toggle');

function applyTheme(theme){
  body.classList.remove('dark','light');
  body.classList.add(theme);
  localStorage.setItem('zekart-theme', theme);
}

// Detect saved theme or time
const savedTheme = localStorage.getItem('zekart-theme');
if(savedTheme){
  applyTheme(savedTheme);
}else{
  const hour = new Date().getHours();
  const theme = (hour >= 18 || hour < 6) ? 'dark' : 'light';
  applyTheme(theme);
}

// Manual toggle
toggleBtn.addEventListener('click', ()=>{
  const currentTheme = body.classList.contains('dark') ? 'dark' : 'light';
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  applyTheme(newTheme);
});
