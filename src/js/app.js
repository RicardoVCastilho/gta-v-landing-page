function showMenu() {
    const hamburgerMenu = document.querySelector('.hamburguer-menu');
    const icon = document.querySelector('.icon');
    const header = document.querySelector('.header');

    const isOpen = hamburgerMenu.classList.toggle('open');
    icon.src = isOpen
        ? "./src/images/close_white_36dp.svg"
        : "./src/images/menu_white_36dp.svg";

    header.style.padding = isOpen ? '10px 20px 150px' : '10px 20px';
}
