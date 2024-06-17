
// import Swiper from 'swiper/bundle';
// import 'swiper/css';
// import { getElement } from "../core/index.js";

// function partnersTop() {
//     if (!getElement('[data-swiper="partners-top"]')) return;
//     new Swiper('[data-swiper="partners-top"]', {
//         spaceBetween: 16,
//         breakpoints: {
//             320: { slidesPerView: 2.5 },
//             576: { slidesPerView: 3.1 },
//             992: { slidesPerView: 4.36 },
//         },
//         loop: true,
//         speed: 700,
//         autoplay: {
//             delay: 4000,
//             disableOnInteraction: false,
//         },
//     });
// }

// function partnersBottom() {
//     if (!getElement('[data-swiper="partners-bottom"]')) return;
//     new Swiper('[data-swiper="partners-bottom"]', {
//         spaceBetween: 16,
//         breakpoints: {
//             320: { slidesPerView: 2.5 },
//             576: { slidesPerView: 3.1 },
//             992: { slidesPerView: 4.36 },
//         },
//         loop: true,
//         speed: 700,
//         autoplay: {
//             delay: 3500,
//             disableOnInteraction: false,
//         },
//     });
// }

// function aboutFL() {
//     if (!getElement('[data-swiper="about-fl"]')) return;
//     new Swiper('[data-swiper="about-fl"]', {
//         spaceBetween: 16,
//         slidesPerView: 'auto',
//         loop: true,
//         speed: 700,
//         autoplay: {
//             delay: 3500,
//             disableOnInteraction: false,
//         },
//         navigation: {
//             nextEl: '.about-fl-next',
//             prevEl: '.about-fl-prev',
//         },
//         pagination: {
//             el: ".about-fl-pagination",
//             type: "fraction",
//             renderFraction: function (currentClass, totalClass) {
//                 return `<span class="${currentClass}"></span>-<span class="${totalClass}"></span>`;
//             },
//         },
//         scrollbar: {
//             el: ".about-fl-scrollbar",
//             draggable: true,
//         },
//     });
// }

// function getSlidesPerView(width) {
//     if (width > 1024) return 4;
//     if (width > 640) return 2;
//     return 1;
// }

// function updateCustomPagination(swiper) {
//     const currentSlide = document.querySelector('.current-slide');
//     const totalSlides = document.querySelector('.total-slides');

//     if (!currentSlide || !totalSlides) {
//         console.error('Pagination elements not found');
//         return;
//     }

//     const total = swiper.slides.filter(slide => !slide.classList.contains('swiper-slide-duplicate')).length;
//     const slidesPerView = getSlidesPerView(swiper.width);
//     let current = swiper.realIndex + slidesPerView;

//     if (current > total) current = current % total || total;

//     currentSlide.textContent = current;
//     totalSlides.textContent = total;

//     const progressBarFill = document.querySelector('.swiper-pagination-progressbar-fill');
//     if (progressBarFill) {
//         const progress = (swiper.realIndex + slidesPerView) / total;
//         progressBarFill.style.transform = `scaleX(${progress})`;
//         progressBarFill.style.transformOrigin = 'left';
//     } else {
//         console.error('Progress bar fill element not found');
//     }
// }

// function team() {
//     const swiperElement = getElement('[data-swiper="team"]');
//     if (!swiperElement) {
//         console.error('Swiper element not found');
//         return;
//     }

//     const swiper = new Swiper(swiperElement, {
//         breakpoints: {
//             320: {
//                 slidesPerView: "auto",
//                 spaceBetween: 16,
//             },
//             992: {
//                 slidesPerView: 4,
//                 spaceBetween: 21,
//             },
//         },
//         loop: true,
//         speed: 700,
//         autoplay: {
//             delay: 3500,
//             disableOnInteraction: false,
//         },
//         navigation: {
//             nextEl: '.team-next',
//             prevEl: '.team-prev',
//         },
//         pagination: {
//             el: ".progressbar-pagination",
//             type: "progressbar",
//         },
//         on: {
//             init: function () {
//                 updateCustomPagination(this);
//             },
//             slideChange: function () {
//                 updateCustomPagination(this);
//             },
//         },
//     });

//     updateCustomPagination(swiper);
//     window.addEventListener('resize', function () {
//         updateCustomPagination(swiper);
//     });
// }


// export {
//     partnersTop,
//     partnersBottom,
//     aboutFL,
//     team,
// };




// import Swiper from 'swiper/bundle';
// import 'swiper/css';
// import { getElement } from "../core/index.js";

// function partnersTop() {
//     if (!getElement('[data-swiper="partners-top"]')) return;

//     new Swiper('[data-swiper="partners-top"]', {
//         spaceBetween: 16,
//         breakpoints: {
//             320: { slidesPerView: 2.5 },
//             576: { slidesPerView: 3.1 },
//             992: { slidesPerView: 4.36 },
//         },
//         loop: true,
//         speed: 700,
//         autoplay: {
//             delay: 4000,
//             disableOnInteraction: false,
//         },
//     });
// }

// function partnersBottom() {
//     if (!getElement('[data-swiper="partners-bottom"]')) return;

//     new Swiper('[data-swiper="partners-bottom"]', {
//         spaceBetween: 16,
//         breakpoints: {
//             320: { slidesPerView: 2.5 },
//             576: { slidesPerView: 3.1 },
//             992: { slidesPerView: 4.36 },
//         },
//         loop: true,
//         speed: 700,
//         autoplay: {
//             delay: 3500,
//             disableOnInteraction: false,
//         },
//     });
// }

// function aboutFL() {
//     if (!getElement('[data-swiper="about-fl"]')) return;

//     new Swiper('[data-swiper="about-fl"]', {
//         spaceBetween: 16,
//         slidesPerView: 'auto',
//         loop: true,
//         speed: 700,
//         autoplay: {
//             delay: 3500,
//             disableOnInteraction: false,
//         },
//         navigation: {
//             nextEl: '.about-fl-next',
//             prevEl: '.about-fl-prev',
//         },
//         pagination: {
//             el: ".about-fl-pagination",
//             type: "fraction",
//             renderFraction: function (currentClass, totalClass) {
//                 return `<span class="${currentClass}"></span>-<span class="${totalClass}"></span>`;
//             },
//         },
//         scrollbar: {
//             el: ".about-fl-scrollbar",
//             draggable: true,
//         },
//     });
// }

// function getSlidesPerView(width) {
//     if (width > 1024) return 4;
//     if (width > 640) return 2;
//     return 1;
// }

// function updateCustomPagination(swiper) {
//     const currentSlide = document.querySelector('.current-slide');
//     const totalSlides = document.querySelector('.total-slides');

//     if (!currentSlide || !totalSlides) {
//         console.error('Pagination elements not found');
//         return;
//     }

//     const total = swiper.slides.filter(slide => !slide.classList.contains('swiper-slide-duplicate')).length;
//     const slidesPerView = getSlidesPerView(swiper.width);
//     let current = swiper.realIndex + slidesPerView;

//     if (current > total) current = current % total || total;

//     currentSlide.textContent = current;
//     totalSlides.textContent = total;

//     const progressBarFill = document.querySelector('.swiper-pagination-progressbar-fill');
//     if (progressBarFill) {
//         const progress = (swiper.realIndex + slidesPerView) / total;
//         progressBarFill.style.transform = `scaleX(${progress})`;
//         progressBarFill.style.transformOrigin = 'left';
//     } else {
//         console.error('Progress bar fill element not found');
//     }
// }

// function team() {
//     const swiperElement = getElement('[data-swiper="team"]');
//     if (!swiperElement) {
//         console.error('Swiper element not found');
//         return;
//     }

//     const swiper = new Swiper(swiperElement, {
//         breakpoints: {
//             320: {
//                 slidesPerView: "auto",
//                 spaceBetween: 16,
//             },
//             992: {
//                 slidesPerView: 4,
//                 spaceBetween: 21,
//             },
//         },
//         loop: true,
//         speed: 700,
//         autoplay: {
//             delay: 3500,
//             disableOnInteraction: false,
//         },
//         navigation: {
//             nextEl: '.team-next',
//             prevEl: '.team-prev',
//         },
//         pagination: {
//             el: ".progressbar-pagination",
//             type: "progressbar",
//         },
//         on: {
//             init: function () {
//                 updateCustomPagination(this);
//             },
//             slideChange: function () {
//                 updateCustomPagination(this);
//             },
//         },
//     });

//     updateCustomPagination(swiper);
//     window.addEventListener('resize', function () {
//         updateCustomPagination(swiper);
//     });
// }

// export {
//     partnersTop,
//     partnersBottom,
//     aboutFL,
//     team,
// };



import Swiper from 'swiper/bundle';
import 'swiper/css';
import { getElement } from "../core/index.js";

function partnersTop() {
    if (!getElement('[data-swiper="partners-top"]')) return;

    new Swiper('[data-swiper="partners-top"]', {
        spaceBetween: 16,
        breakpoints: {
            320: { slidesPerView: 2.5 },
            576: { slidesPerView: 3.1 },
            992: { slidesPerView: 4.36 },
        },
        loop: true,
        speed: 700,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
    });
}

function partnersBottom() {
    if (!getElement('[data-swiper="partners-bottom"]')) return;

    new Swiper('[data-swiper="partners-bottom"]', {
        spaceBetween: 16,
        breakpoints: {
            320: { slidesPerView: 2.5 },
            576: { slidesPerView: 3.1 },
            992: { slidesPerView: 4.36 },
        },
        loop: true,
        speed: 700,
        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
        },
    });
}

function aboutFL() {
    if (!getElement('[data-swiper="about-fl"]')) return;

    new Swiper('[data-swiper="about-fl"]', {
        spaceBetween: 16,
        slidesPerView: 'auto',
        loop: true,
        speed: 700,
        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.about-fl-next',
            prevEl: '.about-fl-prev',
        },
        pagination: {
            el: ".about-fl-pagination",
            type: "fraction",
            renderFraction: function (currentClass, totalClass) {
                return `<span class="${currentClass}"></span>-<span class="${totalClass}"></span>`;
            },
        },
        scrollbar: {
            el: ".about-fl-scrollbar",
            draggable: true,
        },
    });
}

function getSlidesPerView(width) {
    if (width > 1024) return 4;
    if (width > 640) return 2;
    return 1;
}

function updateCustomPagination(swiper) {
    const currentSlide = document.querySelector('.current-slide');
    const totalSlides = document.querySelector('.total-slides');

    if (!currentSlide || !totalSlides) {
        console.error('Pagination elements not found');
        return;
    }

    const total = swiper.slides.filter(slide => !slide.classList.contains('swiper-slide-duplicate')).length;
    const slidesPerView = getSlidesPerView(swiper.width);
    let current = swiper.realIndex + slidesPerView;

    if (current > total) current = current % total || total;

    currentSlide.textContent = current;
    totalSlides.textContent = total;

    const progressBarFill = document.querySelector('.swiper-pagination-progressbar-fill');
    if (progressBarFill) {
        const progress = (swiper.realIndex + slidesPerView) / total;
        progressBarFill.style.transform = `scaleX(${progress})`;
        progressBarFill.style.transformOrigin = 'left';
    } else {
        console.error('Progress bar fill element not found');
    }
}



function initSwiper(swiperSelector, nextSelector, prevSelector, slidesPerViewLarge) {
    const swiperElement = getElement(swiperSelector);
    if (!swiperElement) {
        console.error('Swiper element not found');
        return;
    }

    const swiper = new Swiper(swiperElement, {
        breakpoints: {
            320: {
                slidesPerView: "auto",
                spaceBetween: 16,
            },
            992: {
                slidesPerView: slidesPerViewLarge,
                spaceBetween: 21,
            },
        },
        loop: true,
        speed: 700,
        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: nextSelector,
            prevEl: prevSelector,
        },
        pagination: {
            el: ".progressbar-pagination",
            type: "progressbar",
        },
        on: {
            init: function () {
                updateCustomPagination(this);
            },
            slideChange: function () {
                updateCustomPagination(this);
            },
        },
    });

    updateCustomPagination(swiper);
    window.addEventListener('resize', function () {
        updateCustomPagination(swiper);
    });
}

function team() {
    initSwiper('[data-swiper="team"]', '.team-next', '.team-prev', 4);
}

function caseCarousel() {
    initSwiper('[data-swiper="case"]', '.case-next', '.case-prev', 3);
}

export {
    partnersTop,
    partnersBottom,
    aboutFL,
    team,
    caseCarousel
};
