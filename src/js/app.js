window['FLS'] = true;
// Підключення основного файлу стилів
import "../scss/style.scss";

import * as flsFunctions from "./core/functions.js";
import {scrollToAnchor} from "./modules/scrollToAnchor.js";
import {headerFixed} from "./modules/index.js";
import {partnersBottom, partnersTop, aboutFL, caseCarousel, team} from "./modules/sliders.js";
import HeaderComponent from "./modules/HeaderComponent.js";
import burger from "./modules/burger.js";


/* Перевірка підтримки webp, додавання класу webp або no-webp для HTML */
/* (i) необхідно для коректного відображення webp із css */
flsFunctions.isWebp();
/* Додавання класу touch для HTML якщо браузер мобільний */
flsFunctions.addTouchClass();
/* Додавання loaded для HTML після повного завантаження сторінки */
// flsFunctions.addLoadedClass();

/* Враховування плаваючої панелі на мобільних пристроях при 100vh */
flsFunctions.fullVHfix();


// Ліниве (відкладене) завантаження картинок
// Документація по роботі у шаблоні: https://template.fls.guru/template-docs/modul-lenivaya-podgruzka-lazy-loading.html
// Документація плагіна: https://github.com/verlok/vanilla-lazyload
// Сніппет(HTML):
// import './files/scroll/lazyload.js';

window.addEventListener("DOMContentLoaded", () => {
    try {
        HeaderComponent();
        partnersTop();
        partnersBottom();
        aboutFL();
        caseCarousel();
        team();
        scrollToAnchor();
        headerFixed();
    }   catch (e) {
        console.log(e);
    }
});

burger()





// const workSection = document.querySelector('.animation', 'animation-screen');

// const observerOptions = {
//   root: null, 
//   rootMargin: '0px',
//   threshold: 0.3 
// };

// const observerCallback = (entries, observer) => {
//   entries.forEach(entry => {
//     if (entry.isIntersecting) {
//       entry.target.classList.add('active');
//       observer.unobserve(entry.target);
//     }
//   });
// };

// const observer = new IntersectionObserver(observerCallback, observerOptions);

// observer.observe(workSection);




// Выбираем все элементы с классами 'work' и 'animation-screen'
const elements = document.querySelectorAll('.animation, .animation-screen');

// Опции для наблюдателя
const observerOptions = {
  root: null, // В данном случае корневой элемент - это viewport
  rootMargin: '0px',
  threshold: 0.7 // Значение порога видимости, 10% элемента должно быть видно
};

// Функция обратного вызова
const observerCallback = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Если элемент пересекает видимую область, добавляем класс 'active'
      entry.target.classList.add('active');
      // Прекращаем наблюдение за элементом
      observer.unobserve(entry.target);
    }
  });
};

// Создаем наблюдателя
const observer = new IntersectionObserver(observerCallback, observerOptions);

// Наблюдаем за элементами с классами 'work' и 'animation-screen'
elements.forEach(element => observer.observe(element));
