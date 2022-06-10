class MobileMenu {
    constructor() {
        this.menuIcon = document.querySelector('.site-header__menu-icon')
        this.primaryNav = document.querySelector('.primary-nav')
        this.navLinks = document.querySelectorAll('.primary-nav__link')
        this.events()
    }

    events() {
        this.menuIcon.addEventListener('click', () => {this.toggleMenu()})
        this.navLinks.forEach( link => link.addEventListener('click', () => this.closeMenu()))
    }

    closeMenu() {
        this.menuIcon.classList.remove('site-header__menu-icon--close')
        this.primaryNav.classList.remove('primary-nav--is-open')
    }

    toggleMenu() {
        this.menuIcon.classList.toggle('site-header__menu-icon--close')
        this.primaryNav.classList.toggle('primary-nav--is-open')
    }
}

export default MobileMenu