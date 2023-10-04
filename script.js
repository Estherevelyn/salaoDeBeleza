
let sections = document.querySelectorAll('section');
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop -100;
        let height = sec.offsetHeight;

        if (top >= offset && top < offset + height) {
            sec.classList.add('show-animate');    
        }
        else {
            sec.classList.remove('show-animate');
        }
    })
}

const sliderContainer = document.querySelector('.slider-container');

const slideRight = document.querySelector('.right-slide');
const slideLeft = document.querySelector('.left-slide');

const upButton = document.querySelector('.up-button');
const downButton = document.querySelector('.down-button');

const slidesLength = slideLeft.querySelectorAll('div').length;

let activeSlideIndex = 0;

slideLeft.style.top = `-${(slidesLength -1) * 100}vh`;


//adicionar eventlineart no buttons 

upButton.addEventListener('click', () => changeSlide('up'));
downButton.addEventListener('click', () => changeSlide('down'));

const changeSlide = (direction) => {
    const sliderHeight = sliderContainer.clientHeight;
    if(direction == 'up'){
    activeSlideIndex++;
    if(activeSlideIndex > slidesLength -1){
    activeSlideIndex = 0;
    }
    } else if (direction === 'down'){
        activeSlideIndex--;
        if(activeSlideIndex < 0){
         activeSlideIndex = slidesLength -1;   
        }
    }

slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`;
slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`;
};



