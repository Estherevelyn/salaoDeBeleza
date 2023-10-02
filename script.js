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

var swiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    sliderPerView: 1,
    spaceBetween: 0,
    mousewheel: true,
    pagination: {
        el:'.swiper-pagination',
        type: 'progressbar',
    }
}) 