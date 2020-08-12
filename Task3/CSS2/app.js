
let sidenav = document.getElementById('sidenav-mobile')

document.getElementById('sidebar-btn').onclick = () => { 
    sidenav.classList.add('sidebar-active')
}
document.querySelector(".app").addEventListener("click", () => {
    sidenav.classList.remove('sidebar-active')
})
sidenav.addEventListener('touchmove', (event) => {
    event.preventDefault();
}, false);


let dropNav = document.getElementById('drop-nav-btn')
dropNav.onclick = () => {
    dropNav.classList.toggle("drop-active-btn")
    document.getElementById('drop-nav').classList.toggle("drop-active")
}