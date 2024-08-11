function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "static/images/purple-menu.png";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "static/images/purple-close-menu.png";
    }
}