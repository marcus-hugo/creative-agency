import '../styles/styles.css'
import MobileMenu from './modules/MobileMenu'

new MobileMenu()

/* 'accept the hot updates if it makes sense' */
if(module.hot) {
    module.hot.accept()
}