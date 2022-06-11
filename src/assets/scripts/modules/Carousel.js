class Carousel {
    constructor() {
        this.previous = document.querySelector('.slide-control-btn--previous');
        this.next = document.querySelector('.slide-control-btn--next');
        this.slides = document.querySelectorAll('.slide');
        this.slideIndex = 1
        this.events()
    }

    events() {
        this.previous.addEventListener('click', () => {this.nextSlide(-1)})
        this.next.addEventListener('click', () => {this.nextSlide(1)})
    }

    nextSlide(n) {
        this.currentSlide(this.slideIndex += n) // 0, n=-1
    }

    currentSlide(n) {

        console.log(this.slideIndex)

        if (n > this.slides.length) {
            this.slideIndex = 1;
        }
        if (n < 1) {
            this.slideIndex = this.slides.length; //3
            console.log(this.slideIndex)
        }
        for (let i = 0; i < this.slides.length; i++) {
            this.slides[i].style.display = "none"; // hide all slides
        }
       
        this.slides[this.slideIndex - 1].style.display = "flex"; //2 or slide 2
        console.log(this.slideIndex)
    }
}

export default Carousel