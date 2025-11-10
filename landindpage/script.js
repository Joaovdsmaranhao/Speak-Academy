const navbar = document.getElementById('navbar')
const logoacademy = document.getElementById('academy')
const navlinks = document.querySelectorAll('.nav-links a')
const mobilemenu = document.getElementById('menu-mobile')
const mobilelinks = document.getElementById('menu-links')
const btninscrever = document.getElementById('mobile-btn')

window.addEventListener('scroll', () => {
    if(window.scrollY > 100) {
        navbar.classList.add("scrolled")
        logoacademy.classList.add("scrolled")
        navlinks.forEach(links =>
            links.classList.add("scrolled")
        )
    }
    else  {
        navbar.classList.remove("scrolled");
        logoacademy.classList.remove("scrolled")
        navlinks.forEach(links =>
            links.classList.remove("scrolled")
        )
    }
})


mobilemenu.addEventListener('click',() => {
    mobilelinks.classList.toggle('activate')
    btninscrever.classList.toggle('activate')
})

