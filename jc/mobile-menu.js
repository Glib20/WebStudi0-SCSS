(() => {
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn = document.querySelector('.js-close-menu');
  const menu = document.querySelector('.js-menu-container');

  const toggleMenu = () => {
    menu.classList.toggle('is-open');
    document.body.classList.toggle('no-scroll');
  };

  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);
})();
