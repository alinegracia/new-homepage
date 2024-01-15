window.addEventListener('resize', function() {
    let imageCover = document.getElementById('image-cover');
    var newSrc = window.innerWidth <= 600 ? './image-web-3-mobile.jpg' : './image-web-3-desktop.jpg';
    imageCover.src = newSrc;
  });

const iconMenu = document.getElementById('icon-menu');
const nav = document.querySelector('nav');

const overlay = document.getElementById('overlay');

iconMenu.addEventListener("click", () => {
    nav.classList.toggle("active")

    overlay.style.display = (overlay.style.display === 'block') ? 'none' : 'block';

    const imageIcon = document.getElementById('icon-menu');

        if (imageIcon.src.match('./icon-menu.svg')) {
            imageIcon.src = './icon-menu-close.svg';
        } else {
            imageIcon.src = './icon-menu.svg';
        }
});