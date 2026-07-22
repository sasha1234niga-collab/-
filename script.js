/* =========================================
   ПЛАВНЫЙ СКРОЛЛ
========================================= */

function scrollToSection(sectionId) {

    const section = document.getElementById(sectionId);

    if (!section) return;

    section.scrollIntoView({

        behavior: "smooth",

        block: "start"

    });

}



/* =========================================
   МУЗЫКА
========================================= */

const music = new Audio("1JDGYUYj8XGGMn6pcJE5+NYE_e7N6XZI.m4a");

music.loop = true;

music.volume = 0.35;


let musicPlaying = false;


function toggleMusic() {

    const button = document.getElementById("music-button");

    if (!musicPlaying) {

        music.play()
            .then(() => {

                musicPlaying = true;

                button.innerHTML = "❚❚";

                createMusicHearts();

            })
            .catch(() => {

                alert(
                    "Добавь файл music.mp3 в папку сайта, чтобы включить музыку ❤️"
                );

            });

    } else {

        music.pause();

        musicPlaying = false;

        button.innerHTML = "▶";

    }

}



/* =========================================
   СЕРДЕЧКИ ПРИ ВКЛЮЧЕНИИ МУЗЫКИ
========================================= */

function createMusicHearts() {

    for (let i = 0; i < 6; i++) {

        setTimeout(() => {

            createHeart();

        }, i * 250);

    }

}


function createHeart() {

    const container =
        document.getElementById(
            "hearts-container"
        );

    if (!container) return;


    const heart =
        document.createElement("div");


    heart.className =
        "floating-heart";


    heart.innerHTML =
        Math.random() > 0.5
            ? "❤️"
            : "♡";


    heart.style.left =
        Math.random() * 100 + "%";


    heart.style.bottom =
        Math.random() * 30 + "%";


    heart.style.fontSize =
        (Math.random() * 15 + 15) + "px";


    container.appendChild(heart);


    setTimeout(() => {

        heart.remove();

    }, 3000);

}



/* =========================================
   ПАСХАЛКИ-СЕРДЕЧКИ
========================================= */

function showLoveMessage(heart, messageText) {

    const message =
        document.getElementById("love-message");

    message.innerHTML = messageText;

    message.classList.add("show");

    createManyHearts();

    heart.style.opacity = "0";

    setTimeout(() => {

        message.classList.remove("show");

        setTimeout(() => {

            heart.style.opacity = "0.2";

        }, 500);

    }, 3500);

}



/* =========================================
   МНОГО СЕРДЕЧЕК
========================================= */

function createManyHearts() {

    for (let i = 0; i < 20; i++) {

        setTimeout(() => {

            createHeart();

        }, i * 80);

    }

}



/* =========================================
   ПОЯВЛЕНИЕ ЭЛЕМЕНТОВ ПРИ СКРОЛЛЕ
========================================= */

const observer =
    new IntersectionObserver(

        (entries) => {

            entries.forEach(
                (entry) => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.classList.add(
                            "active"
                        );

                    }

                }
            );

        },

        {

            threshold: 0.12

        }

    );



/* =========================================
   НАБЛЮДАЕМ ЗА ЭЛЕМЕНТАМИ
========================================= */

document
    .querySelectorAll(
        ".section-number, h2, .section-subtitle, .text-block, .photo-card, .reason-card, .video-card, .message-text, .easter-hint, .main-button, .scroll-button"
    )
    .forEach(
        (element) => {

            element.classList.add(
                "reveal"
            );

            observer.observe(
                element
            );

        }
    );



/* =========================================
   АНИМАЦИЯ ФОТОГРАФИЙ
========================================= */

document
    .querySelectorAll(
        ".photo-card"
    )
    .forEach(
        (photo) => {


            photo.addEventListener(
                "click",
                () => {


                    const image =
                        photo.querySelector(
                            "img"
                        );


                    if (!image) return;


                    openImage(
                        image.src
                    );


                }
            );


        }
    );



/* =========================================
   ОТКРЫТИЕ ФОТО НА ВЕСЬ ЭКРАН
========================================= */

function openImage(src) {


    const viewer =
        document.createElement(
            "div"
        );


    viewer.style.position =
        "fixed";


    viewer.style.inset =
        "0";


    viewer.style.background =
        "rgba(0,0,0,0.94)";


    viewer.style.zIndex =
        "1000";


    viewer.style.display =
        "flex";


    viewer.style.alignItems =
        "center";


    viewer.style.justifyContent =
        "center";


    viewer.style.padding =
        "20px";


    viewer.style.cursor =
        "pointer";


    viewer.style.backdropFilter =
        "blur(15px)";


    const image =
        document.createElement(
            "img"
        );


    image.src =
        src;


    image.style.maxWidth =
        "95%";


    image.style.maxHeight =
        "90vh";


    image.style.objectFit =
        "contain";


    image.style.borderRadius =
        "15px";


    image.style.boxShadow =
        "0 30px 100px rgba(0,0,0,0.7)";


    viewer.appendChild(
        image
    );


    document.body.appendChild(
        viewer
    );


    viewer.addEventListener(
        "click",
        () => {

            viewer.remove();

        }
    );


}



/* =========================================
   ПЛАВАЮЩИЕ СЕРДЕЧКИ ПРИ КЛИКЕ
========================================= */

document.addEventListener(
    "click",
    (event) => {


        if (
            event.target.closest(
                "button"
            )
        ) {

            for (
                let i = 0;
                i < 3;
                i++
            ) {

                setTimeout(
                    () => {

                        createHeart();

                    },
                    i * 100
                );

            }

        }

    }
);



/* =========================================
   ЭФФЕКТ ПАРАЛЛАКСА ДЛЯ ГЛАВНОГО ЭКРАНА
========================================= */

window.addEventListener(
    "scroll",
    () => {


        const hero =
            document.querySelector(
                ".hero"
            );


        if (!hero) return;


        const scroll =
            window.scrollY;


        if (
            scroll <
            window.innerHeight
        ) {


            hero.style.backgroundPosition =
                `center ${scroll * 0.35}px`;


        }


    }
);



/* =========================================
   СЛУЧАЙНЫЕ МАЛЕНЬКИЕ СЕРДЕЧКИ
========================================= */

setInterval(
    () => {


        if (
            Math.random() >
            0.65
        ) {


            createHeart();


        }


    },
    5000
);



/* =========================================
   ЗАЩИТА ОТ ПЕРЕЗАГРУЗКИ В СЕРЕДИНЕ
========================================= */

window.addEventListener(
    "beforeunload",
    () => {

        window.scrollTo(
            0,
            0
        );

    }
);
