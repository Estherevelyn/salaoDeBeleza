// scroll de rolagem do texto 
let sections = document.querySelectorAll('section');
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop +100;
        let height = sec.offsetHeight;

        if (top >= offset && top < offset + height) {
            sec.classList.add('show-animate');    
        }
        else {
            sec.classList.remove('show-animate');
        }
    })
}

// adicionando as variaveis 
// Carrosel 
const sliderContainer = document.querySelector('.slider-container');

const slideRight = document.querySelector('.right-slide');
const slideLeft = document.querySelector('.left-slide');

const upButton = document.querySelector('.up-button');
const downButton = document.querySelector('.down-button');

const slidesLength = slideLeft.querySelectorAll('div').length;

let activeSlideIndex = 0;

slideLeft.style.top = `-${(slidesLength -1) * 100}vh`;


//adicionar eventlineart no buttons 

upButton.addEventListener('click', () => changeSlide('up')); // change é a funçao de ir para cima e para baixo
downButton.addEventListener('click', () => changeSlide('down'));


// adicionando a direcao 
const changeSlide = (direction) => {
    const sliderHeight = sliderContainer.clientHeight;
    if(direction == 'up'){ //se a direcao for para cima o a imagem devera subir 
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

slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`; //remover a linha enquanto a outra é adicionada 
slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`;
};

// card em loop 

const imageWrapper = document.querySelector('.image-wrapper')
const imageItems = document.querySelectorAll('.image-wrapper > *')
const imageLength = imageItems.length
const perView = 3
let totalScroll = 0
const delay = 2000

imageWrapper.style.setProperty('--per-view', perView)
for(let i = 0; i < perView; i++) {
  imageWrapper.insertAdjacentHTML('beforeend', imageItems[i].outerHTML)
}

let autoScroll = setInterval(scrolling, delay)

function scrolling() {
  totalScroll++
  if(totalScroll == imageLength + 1) {
    clearInterval(autoScroll)
    totalScroll = 1
    imageWrapper.style.transition = '0s'
    imageWrapper.style.left = '0'
    autoScroll = setInterval(scrolling, delay)
  }
  const widthEl = document.querySelector('.image-wrapper > :first-child').offsetWidth + 24
  imageWrapper.style.left = `-${totalScroll * widthEl}px`
  imageWrapper.style.transition = '.3s'
}

const hamburguer = document.querySelector(".hamburguer");
const navMenu = document.querySelector(".nav-menu");


hamburguer.addEventListener("click", () => {
 hamburguer.classList.toggle("active");
 navMenu.classList.toggle("active");
})
