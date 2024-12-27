const surpriseButton = document.getElementById("surpriseButton");
const surpriseContent = document.getElementById("surpriseContent");
const birthdaySong = document.getElementById("birthdaySong");
const qrCode = document.getElementById("QR-Code");
const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

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
        "Мухи це це",
        "Це Христинка",
        "Це пАдружки",
        "Форсаж",
        "Давай ми так станемо, а ти нас сфотографуєш",
        "Я НЕ РЕВІЛА. Я ПИЩАЛА !!!!",
        "Біля Мускатіка ",
        "На шашличках",
        "Старі, добрі часи",
        "Ой чекайте зараз губки нафарбую",
        "На зупинці чілим",
        "Just take a photo",
        "Квас - це тєма",
        "Трохи розмито",
        "Тут має бути текст",
        "Не завідуйте будь ласочка",
        "Промовчу",
        "Ліза вітає з днем народження"
    ];

    let currentPhotoIndex = -1;

    function changePhotoAndText() {
        currentPhotoIndex = (currentPhotoIndex + 1) % photos.length;
        photoElement.src = photos[currentPhotoIndex];
        photoTextElement.textContent = photoTexts[currentPhotoIndex];
    }

    setInterval(changePhotoAndText, 3500);
};

surpriseButton.addEventListener("click", function () {
    if (qrCode.classList.contains("hidden")) {
        qrCode.classList.remove("hidden");
        surpriseButton.classList.add("hidden");
        birthdaySong.play();
        createFirework(canvas.width / 2, canvas.height / 2);
    } else {
        qrCode.classList.add("hidden");
        birthdaySong.pause();
        birthdaySong.currentTime = 0;
    }
});


birthdaySong.addEventListener("ended", function () {
    birthdaySong.currentTime = 0; 
    birthdaySong.play(); 
});

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