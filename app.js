const menu = document.querySelector('qualite')
const btnmenu = document.querySelector('.btn-toggle-container')

btnmenu.addEventListener('click', function() {
    menu.classList.toggle('active-menu')
})