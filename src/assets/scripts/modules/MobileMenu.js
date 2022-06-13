class MobileMenu {
    constructor() {
        this.menuIcon = document.querySelector('.site-header__nav-toggle-btn')
        this.primaryNav = document.querySelector('.primary-nav')
        this.navLinks = document.querySelectorAll('.primary-nav__link')
        this.events()
    }

    events() {
        this.menuIcon.addEventListener('click', () => {this.toggleMenu()})
        this.menuIcon.addEventListener('keydown', (e) => {this.toggleMenu(e)})
        this.navLinks.forEach( link => link.addEventListener('click', () => this.closeMenu()))
    }

    closeMenu() {
        this.menuIcon.classList.remove('nav-open')
        this.primaryNav.classList.remove('primary-nav--is-open')
    }

    toggleMenu(e) {
        this.menuIcon.classList.toggle('nav-open')
        this.primaryNav.classList.toggle('primary-nav--is-open')

        if (e.keyCode == 13) {
            this.menuIcon.classList.toggle('nav-open')
            this.primaryNav.classList.toggle('primary-nav--is-open')
        }
    }
}

export default MobileMenu