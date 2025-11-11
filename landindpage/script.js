
const mobilemenu = document.getElementById('menu-mobile')
const mobilelinks = document.getElementById('menu-links')
const btninscrever = document.getElementById('mobile-btn')
const navbarr = document.getElementById('navbar')
const menubar = document.getElementById('icone')


mobilemenu.addEventListener('click',() => {

    mobilelinks.classList.toggle('activate')
    btninscrever.classList.toggle('activate')
    navbarr.classList.toggle('activate')
    if (menubar.classList.contains('bi-list')) {

        menubar.classList.replace('bi-list', 'bi-x')
    }
    else {
        menubar.classList.replace('bi-x','bi-list')
    }

})

