// яндекс карта
ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
        center: [55.761122, 37.613414],
        zoom: 13
    }, {
        searchControlProvider: 'yandex#search'
    }),

        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'Даев переулок, дом 41',
            balloonContent: 'Это красивая метка'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'images/myIcon.gif',
            // Размеры метки.
            iconImageSize: [30, 42],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-5, -38]
        }),

        myPlacemarkWithContent = new ymaps.Placemark([55.769535, 37.639985], {
            hintContent: 'Даев переулок, дом 41',
            balloonContent: 'Бизнес-центр «Даев Плаза»',
            iconContent: '12'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#imageWithContent',
            // Своё изображение иконки метки.
            iconImageHref: 'img/mark.svg',
            // Размеры метки.
            iconImageSize: [12, 12],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            // Смещение слоя с содержимым относительно слоя с картинкой.
            iconContentOffset: [15, 15],
            // Макет содержимого.
            iconContentLayout: MyIconContentLayout
        });

    myMap.geoObjects
        .add(myPlacemark)
        .add(myPlacemarkWithContent);
});
ymaps.ready(function () {
    var myMap = new ymaps.Map('map-mobail', {
        center: [55.764820, 37.633994],
        zoom: 14
    }, {
        searchControlProvider: 'yandex#search'
    }),

        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'Даев переулок, дом 41',
            balloonContent: 'Это красивая метка'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'images/myIcon.gif',
            // Размеры метки.
            iconImageSize: [30, 42],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-5, -38]
        }),

        myPlacemarkWithContent = new ymaps.Placemark([55.769535, 37.639985], {
            hintContent: 'Даев переулок, дом 41',
            balloonContent: 'Бизнес-центр «Даев Плаза»',
            iconContent: '12'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#imageWithContent',
            // Своё изображение иконки метки.
            iconImageHref: 'img/mark.svg',
            // Размеры метки.
            iconImageSize: [12, 12],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            // Смещение слоя с содержимым относительно слоя с картинкой.
            iconContentOffset: [15, 15],
            // Макет содержимого.
            iconContentLayout: MyIconContentLayout
        });

    myMap.geoObjects
        .add(myPlacemark)
        .add(myPlacemarkWithContent);
});
// валидация формы
new JustValidate('.abaut__form', {
    rules: {
        mail: {
            required: true,
            email: true
        },
    }, messages: {
        mail: 'Недопустимый формат'
    },
});
new JustValidate('.form2', {
    rules: {
        name: {
            required: true,
            minLength: 2,
            maxLength: 30,
            // strength: {
            //     custom: '(/[^A-Za-zА-Яа-яЁё]/)'
            // }
        },
        mail: {
            required: true,
            email: true
        },
    }, messages: {
        mail: 'Недопустимый формат',
        name: 'Недопустимый формат'
    },
});

// для анимации смены блоков

let tl = gsap.timeline({ paused: true });
function animate(itam) {
    tl.fromTo(itam, 2, {
        opacity: 0,
        transform: 'translateX(-30px)'
    }, {
        opacity: 1,
        transform: 'translateX(0)'
    });
    tl.play()
}
document.querySelectorAll(".tabs-btn").forEach(itam => {
    itam.addEventListener("click", function (tabsBtn) {
        let dataPath = this.getAttribute("data-path");
        animate(document.querySelector(`[data-target='${dataPath}']`))
    })
})
document.querySelectorAll(".tabs-btn2").forEach(itam => {
    itam.addEventListener("click", function (tabsBtn) {
        let dataPath = this.getAttribute("data-path");
        animate(document.querySelector(`[data-target='${dataPath}']`))
    })
})

// табы
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.tabs-btn').forEach(function (tabBtn) {
        tabBtn.addEventListener('click', function (event) {
            const path = event.currentTarget.dataset.path
            document.querySelectorAll('.content-none').forEach(function (tabsContent) {
                tabsContent.classList.remove('content-activ')
            })
            document.querySelector(`[data-target="${path}"]`).classList.add('content-activ')
        })
    })
})

document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.tabs-btn2').forEach(function (tabBtn) {
        tabBtn.addEventListener('click', function (event) {
            const path = event.currentTarget.dataset.path
            document.querySelectorAll('.content-none2').forEach(function (tabsContent) {
                tabsContent.classList.remove('content-activ2')
            })
            document.querySelector(`[data-target="${path}"]`).classList.add('content-activ2')
        })
    })
})
// смена класса по клику
$("#flag").on("click", ".select__btn", function () {
    $("#flag .select__btn").removeClass("select__activ"); //удаляем класс во всех вкладках
    $(this).addClass("select__activ"); //добавляем класс текущей (нажатой)
});
$("#flag-desk").on("click", ".select__btn", function () {
    $("#flag-desk .select__btn").removeClass("select__activ"); //удаляем класс во всех вкладках
    $(this).addClass("select__activ"); //добавляем класс текущей (нажатой)
});


$("#flag2").on("click", ".color", function () {
    $("#flag2 .color").removeClass("services__activ"); //удаляем класс во всех вкладках
    $(this).addClass("services__activ"); //добавляем класс текущей (нажатой)
});

// плавный скролл по якорю

$(function () {
    $('a[href^="#"]').on('click', function (event) {
        // отменяем стандартное действие
        event.preventDefault();

        var sc = $(this).attr("href"),
            dn = $(sc).offset().top;
        /*
         * sc - в переменную заносим информацию о том, к какому блоку надо перейти
         * dn - определяем положение блока на странице
         */

        $('html, body').animate({ scrollTop: dn }, 1200);

        /*
         * 1000 скорость перехода в миллисекундах
         */
    });
});

// кнопка закрыть

$(document).ready(function () {
    $(".contacts__close").click(function () {
        $(".contacts__map-block").toggleClass("content-none"); return false;
    });
});
$(document).ready(function () {
    $(".header__burger").click(function () {
        $(".header__menu-mobail").toggleClass("content-activ"); return false;
    });
});
$(document).ready(function () {
    $(".header__close-burger").click(function () {
        $(".header__menu-mobail").removeClass("content-activ"); return false;
    });
});

