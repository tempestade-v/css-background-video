/* header-menu */
function controlMenu(param) {
    let sideMenu = document.querySelector('.side-menu')

    param == 'open'
        ? sideMenu.style.right = "0px"
        : sideMenu.style.right = "-300px"
}

/* fixed header */
function fixedHeader() {
    let header = document.querySelector('header')

    if (window.scrollY > 900) {
        header.classList.add('fixed')
    }else{
        header.classList.remove('fixed')
    }
}

window.addEventListener('scroll', fixedHeader)