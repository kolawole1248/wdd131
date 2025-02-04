// Toggle mobile navigation
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav ul');

hamburger.addEventListener('click', () => {
    nav.classList.toggle('active');
});