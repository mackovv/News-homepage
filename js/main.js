const navMobile = document.querySelector('.nav-mobile');
const navBtn = document.querySelector('.hamburger');

const handleNav = () => {
    navMobile.classList.toggle('nav-mobile--active');
    navBtn.classList.toggle('is-active');
}
navBtn.addEventListener('click', handleNav);