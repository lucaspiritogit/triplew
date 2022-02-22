// Icono de hamburgesa para dispositivos móviles
const burgerIcon = document.querySelector('.burgerIconContainer');
const navbarContainer = document.querySelector('.navListContainer');

burgerIcon.addEventListener('click', () => {
    navbarContainer.classList.toggle('enabled');
});