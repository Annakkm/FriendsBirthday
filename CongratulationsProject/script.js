const surpriseButton = document.getElementById("surpriseButton");
const surpriseContent = document.getElementById("surpriseContent");
const birthdaySong = document.getElementById("birthdaySong");
const dynamicText = document.getElementById("dynamicText");
const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let hasTypedText = false; 

window.onload = function () {
    const photoElement = document.getElementById("leftPhoto");
    const photoTextElement = document.getElementById("photoText");

    const photos = [
        "images/photo_30_2024-12-26_12-45-04.jpg",
        "images/photo_28_2024-12-26_12-45-04.jpg",
        "images/photo_27_2024-12-26_12-45-04.jpg",
        "images/photo_25_2024-12-26_12-45-04.jpg",
        "images/photo_24_2024-12-26_12-45-04.jpg",
        "images/photo_23_2024-12-26_12-45-04.jpg",
        "images/photo_22_2024-12-26_12-45-04.jpg",
        "images/photo_20_2024-12-26_12-45-04.jpg",
        "images/photo_19_2024-12-26_12-45-04.jpg",
        "images/photo_18_2024-12-26_12-45-04.jpg",
        "images/photo_17_2024-12-26_12-45-04.jpg",
        "images/photo_16_2024-12-26_12-45-04.jpg",
        "images/photo_15_2024-12-26_12-45-04.jpg",
        "images/photo_14_2024-12-26_12-45-04.jpg",
        "images/photo_13_2024-12-26_12-45-04.jpg",
        "images/photo_12_2024-12-26_12-45-04.jpg",
        "images/photo_11_2024-12-26_12-45-04.jpg",
        "images/photo_10_2024-12-26_12-45-04.jpg",
        "images/photo_9_2024-12-26_12-45-04.jpg",
        "images/photo_8_2024-12-26_12-45-04.jpg",
        "images/photo_7_2024-12-26_12-45-04.jpg",
        "images/photo_6_2024-12-26_12-45-04.jpg",
        "images/photo_5_2024-12-26_12-45-04.jpg",
        "images/photo_4_2024-12-26_12-45-04.jpg",
        "images/photo_3_2024-12-26_12-45-04.jpg",
        "images/photo_2_2024-12-26_12-45-04.jpg",
        "images/photo_1_2024-12-26_12-45-04.jpg",

    ];

    const photoTexts = [
        "Це ми, прикольні",
        "Сестри в лісі",
        "Рєшаєм питання",
        "Шопінг",
        "Двіжуха",
        "Двіжуха 2",
        "Вайбові такі",
        "Вийшли показатися людям",
        "Бабайка",
        "Мухи цеце",
        "Краса неймовірна",
        "Три краси неймовірні",
        "Форсаж",
        "Текст до фото 14",
        "Текст до фото 15",
        "Текст до фото 16",
        "На шашличках",
        "Старі, добрі часи",
        "Ой чекайте зараз губки нафарбую",
        "На зупинці чілим",
        "Just take a photo",
        "Квас це тєма",
        "Трохи розмило",
        "Не завідуйте будь ласочка",
        "Тут має бути текст",
        "Промовчу",
        "Ліза вітає з днем народження"
    ];

    let currentPhotoIndex = -1;

    // Функція для зміни фото та тексту
    function changePhotoAndText() {
        currentPhotoIndex = (currentPhotoIndex + 1) % photos.length; // Ітерація індекса
        photoElement.src = photos[currentPhotoIndex]; // Оновлення джерела зображення
        photoTextElement.textContent = photoTexts[currentPhotoIndex]; // Оновлення тексту
    }

    // Викликаємо зміну фото кожні 10 секунд
    setInterval(changePhotoAndText, 3500);
};

surpriseButton.addEventListener("click", function () {
    if (surpriseContent.classList.contains("hidden")) {
        surpriseContent.classList.remove("hidden");
        birthdaySong.play();
        createFirework(canvas.width / 2, canvas.height / 2);
        if (!hasTypedText) {
            typeText("Ти найкраща, і цей день створений тільки для тебе!", dynamicText);
            hasTypedText = true;
        }
    } else {
        surpriseContent.classList.add("hidden");
        birthdaySong.pause();
        birthdaySong.currentTime = 0;
        hasTypedText = false; // Скидаємо статус друкування тексту
    }
});


document.getElementById("surpriseButton").addEventListener("click", function () {
    const surpriseContent = document.getElementById("surpriseContent");
    const birthdaySong = document.getElementById("birthdaySong");

    if (surpriseContent.classList.contains("hidden")) {
        surpriseContent.classList.remove("hidden");
        birthdaySong.play();
        createFirework(canvas.width / 2, canvas.height / 2);
        typeGreetingText(); // Початок друку тексту
    } else {
        surpriseContent.classList.add("hidden");
        birthdaySong.pause();
        birthdaySong.currentTime = 0;
    }
});



// // Сюрприз: текст, феєрверки та музика
// document.getElementById("surpriseButton").addEventListener("click", function () {
//     const surpriseContent = document.getElementById("surpriseContent");
//     const birthdaySong = document.getElementById("birthdaySong");
//     // const dynamicText = document.getElementById("dynamicText");

//      if (surpriseContent.classList.contains("hidden")) {
//         // Показати контент
//         surpriseContent.classList.remove("hidden");
//         birthdaySong.play(); // Запустити музику
//         createFirework(canvas.width / 2, canvas.height / 2); // Запустити феєрверк
//         typeGreetingText();
//     } else {
//         // Приховати контент
//         surpriseContent.classList.add("hidden");
//         birthdaySong.pause(); // Зупинити музику
//         birthdaySong.currentTime = 0; // Почати з початку
//         dynamicText.textContent = ""; // Очистити текст
//     }
// });


const particles = [];
function random(min, max) {
    return Math.random() * (max - min) + min;
}

function createFirework(x, y) {
    for (let i = 0; i < 50; i++) {
        particles.push({
            x: x,
            y: y,
            dx: random(-3, 3),
            dy: random(-3, 3),
            color: `hsl(${random(0, 360)}, 100%, 50%)`,
            size: random(2, 5),
            life: random(30, 50)
        });
    }
}

function animateFireworks() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach((particle, index) => {
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        particle.x += particle.dx;
        particle.y += particle.dy;
        particle.life--;
        if (particle.life <= 0) particles.splice(index, 1);
    });
    requestAnimationFrame(animateFireworks);
}
animateFireworks();



// Ефект друкування тексту
function typeText(text, element) {
    let i = 0;
    element.textContent = ""; 
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, 50);
        }
    }
    type();
}


// document.getElementById("toggleButton").addEventListener("click", function () {
//     const surpriseContent = document.getElementById("surpriseContent");
//     if (surpriseContent.style.display === "none" || surpriseContent.style.display === "") {
//         surpriseContent.style.display = "block"; // Показати текст
//     } else {
//         surpriseContent.style.display = "none"; // Приховати текст
//     }
// });

surpriseButton.addEventListener("click", function () {
    if (surpriseContent.classList.contains("hidden")) {
        surpriseContent.classList.remove("hidden");
        birthdaySong.play();
        createFirework(canvas.width / 2, canvas.height / 2);
        if (!hasTypedText) {
            typeText("Ти найкраща, і цей день створений тільки для тебе!", dynamicText);
            hasTypedText = true;
        }
    } else {
        surpriseContent.classList.add("hidden");
        birthdaySong.pause();
        birthdaySong.currentTime = 0;
        hasTypedText = false; // Скидаємо статус друкування тексту
    }
});


// // Ефект феєрверків
// const canvas = document.getElementById("fireworks");
// const ctx = canvas.getContext("2d");
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

// const particles = [];
// function random(min, max) {
//     return Math.random() * (max - min) + min;
// }

// function createFirework(x, y) {
//     for (let i = 0; i < 50; i++) {
//         particles.push({
//             x: x,
//             y: y,
//             dx: random(-3, 3),
//             dy: random(-3, 3),
//             color: `hsl(${random(0, 360)}, 100%, 50%)`,
//             size: random(2, 5),
//             life: random(30, 50)
//         });
//     }
// }

// function animateFireworks() {
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     particles.forEach((particle, index) => {
//         ctx.fillStyle = particle.color;
//         ctx.beginPath();
//         ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
//         ctx.fill();
//         particle.x += particle.dx;
//         particle.y += particle.dy;
//         particle.life--;
//         if (particle.life <= 0) particles.splice(index, 1);
//     });
//     requestAnimationFrame(animateFireworks);
// }
// animateFireworks();

// let hasTypedText = false; // Флаг, щоб відстежувати, чи текст уже був надрукований

// // Сюрприз: текст, феєрверки та музика
// document.getElementById("surpriseButton").addEventListener("click", function () {
//     const surpriseContent = document.getElementById("surpriseContent");
//     const birthdaySong = document.getElementById("birthdaySong");

//     if (!hasTypedText) { // Друкувати текст лише один раз
//       surpriseContent.classList.remove("hidden");
//       birthdaySong.play();
//       createFirework(window.innerWidth / 2, window.innerHeight / 2);
//       typeText("Ти найкраща, і цей день створений тільки для тебе! ", document.getElementById("dynamicText"));
//       hasTypedText = true; // Змінюємо флаг після друку
//       }

//     });

// if (!hasTypedText) {
//       createFirework(window.innerWidth / 2, window.innerHeight / 2);
//       birthdaySong.play();
//   }

// // Ефект друкування тексту
// function typeText(text, element) {
//     let i = 0;
//     element.textContent = ""; 
//     function type() {

//         if (i < text.length) {
//             element.textContent += text.charAt(i);
//             i++;
//             setTimeout(type, 50);
//         }
//     }
//     type();
// }


