const header = document.querySelector('.header');
const icon = document.querySelector('.icon');
const btn = document.querySelector('.btn')

icon.addEventListener('click', () => {
    header.classList.toggle('dark');
})
