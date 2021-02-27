/* header-menu */
function controlMenu(param) {
    let sideMenu = document.querySelector('.side-menu')

    if (param == 'open') {
        sideMenu.style.right = "0px"
    } else if (param == 'close') {
        sideMenu.style.right = "-300px"
    }
}

function resizeMenuHeader() {
    let sideMenu = document.querySelector('.side-menu')
    let bodyHeight = document.body.clientHeight

    sideMenu.style.height = `${bodyHeight}px`
}


window.addEventListener("resize", resizeMenuHeader)
window.addEventListener("load", resizeMenuHeader)

/* fixed header */
function fixedHeader() {
    let header = document.querySelector('header')

    window.scrollY > 900
        ? header.classList.add('fixed')
        : header.classList.remove('fixed')
}

window.addEventListener('scroll', fixedHeader)