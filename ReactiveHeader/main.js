const toggleBtn = document.querySelector('.navbar__toogleBtn');
const menu1 = document.querySelector('#menu');
const icons = document.querySelector('#link');

toggleBtn.addEventListener('click', () =>{
    menu1.classList.toggle('active');
    icons.classList.toggle('active');
});