const ham = document.querySelector('.ham');
const enlaces = document.querySelector('.responsivemenu');

ham.addEventListener('click', () => {
    enlaces.classList.toggle('activado');
});

enlaces.addEventListener('click', () => {
    enlaces.classList.toggle('activado');
});