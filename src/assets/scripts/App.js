import '../styles/styles.css'
import MobileMenu from './modules/MobileMenu'
import Carousel from './modules/Carousel'

new MobileMenu()
new Carousel()

/* 'accept the hot updates if it makes sense' */
if(module.hot) {
    module.hot.accept()
}