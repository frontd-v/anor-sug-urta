let menu = document.querySelector('#menu-icon')
let navbar = document.querySelector('.navbar-nav')
let menuLinks = document.querySelectorAll('.nav-item')

menu.onclick = () => {
    menu.classList.toggle('bx-x')
    navbar.classList.toggle('open')
}

menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.toggle('bx-x')
        navbar.classList.toggle('open')
    });
  });






window.onscroll = function () {
    myFunction()
};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}


const swiper1 = new Swiper(".sample-slider", {

    loop: true,
    slidesPerView: 'auto',
    slidesPerGroup: 1,
    spaceBetween: false,
    scrollbar: '.swiper-scrollbar',
    // autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    // },
    pagination: {
        el: '.swiper-pagination',
    },
    // Responsive breakpoints
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 0,
            grid: {
                rows: 1,
            },
        },
        // when window width is >= 640px
        480: {
            slidesPerView: 2,
            spaceBetween: 10
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        // when window width is <= 991px
        992: {
            slidesPerView: 4,
            spaceBetweenSlides: 10,
        }
    }
})