// Burger menu pour gallery page
const burger = document.getElementById('burger');
const navUl = document.querySelector('nav ul');

burger.addEventListener('click', () => {
  navUl.classList.toggle('show');
});
