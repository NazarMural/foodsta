const menuButton = document.querySelector('.menu-button__icon');
const menuContainer = document.querySelector('.menu-container');

menuButton.addEventListener('click', () => {
  menuContainer.classList.toggle('open');
});
