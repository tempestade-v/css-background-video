function controlMenu(param) {
    let sideMenu = document.querySelector('.side-menu')
    
    param == 'open'
        ? sideMenu.style.right = "0px"
        : sideMenu.style.right = "-300px"
}