const menuButton = document.querySelector('.menu-button__icon');
const menuContainer = document.querySelector('.menu-container');

menuButton.addEventListener('click', () => {
  menuContainer.classList.toggle('open');
});

document.addEventListener('click', event => {
  const target = event.target;
  const isMenuOpen = menuContainer.classList.contains('open');
  const isInsideMenu = menuContainer.contains(target);
  const isMenuButton = target.closest('.menu-button__icon');

  if (isMenuOpen && !isInsideMenu && !isMenuButton) {
    menuContainer.classList.remove('open');
  }
});
