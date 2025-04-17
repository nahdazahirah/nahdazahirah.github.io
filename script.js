// Fungsi untuk memainkan suara meong, suara angin, dan suara kucing saat tombol ditekan
document.addEventListener("DOMContentLoaded", function () 
{
    const enterBtn = document.querySelector(".enter-button");
    const meowSound = document.getElementById("meow-sound");
    const catSound = document.getElementById("cat-sound");
    const bgAudio = document.getElementById("bg-audio");

    if (enterBtn) {
        enterBtn.addEventListener("click", function () {
            // Mainkan suara meong
            if (meowSound) {
                meowSound.play();
            }

            // Mainkan suara kucing (loop pelan)
            if (catSound) {
                catSound.volume = 0.3;
                catSound.play();
            }

            // Mainkan background audio (loop pelan)
            if (bgAudio) {
                bgAudio.volume = 0.1;
                bgAudio.play();
            }

            // Scroll ke bawah
            function goToAbout() 
            {
                window.location.href = "about.html";
            }            
        });
    }

    // Menambahkan lebih banyak bintang jatuh secara berkala
    function createShootingStar() {
        const star = document.createElement("div");
        star.classList.add("shooting-star");
        star.style.left = Math.random() * window.innerWidth + "px";
        document.body.appendChild(star);

        setTimeout(() => {
            star.remove();
        }, 5000); // Hapus setelah animasi selesai
    }

    // Bikin 5 bintang jatuh secara acak setiap beberapa detik
    setInterval(() => {
        for (let i = 0; i < 5; i++) {
            setTimeout(createShootingStar, i * 800);
        }
    }, 8000); // Setiap 8 detik muncul 5 bintang

    // Bintang berkelip tetap pakai CSS
});

document.addEventListener("DOMContentLoaded", function () {
    const lines = [
        "Welcome to",
        "Nahda's",
        "Website"
    ];

    const target = document.getElementById("typewriter");
    let lineIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeLine() {
        // Ambil teks saat ini
        let currentLine = lines[lineIndex];
        let displayText = currentLine.substring(0, charIndex);

        // Gabungkan semua baris sebelumnya + baris sekarang
        let fullHTML = "";
        for (let i = 0; i < lineIndex; i++) {
            fullHTML += lines[i] + "<br>";
        }
        fullHTML += displayText;

        target.innerHTML = fullHTML;

        if (!isDeleting) {
            if (charIndex < currentLine.length) {
                charIndex++;
            } else {
                // Tunggu sebelum mulai baris berikutnya
                if (lineIndex < lines.length - 1) {
                    lineIndex++;
                    charIndex = 0;
                } else {
                    setTimeout(() => isDeleting = true, 2000); // Setelah selesai, mulai hapus
                }
            }
        } else {
            if (charIndex > 0) {
                charIndex--;
            } else if (lineIndex > 0) {
                lineIndex--;
                charIndex = lines[lineIndex].length;
            } else {
                isDeleting = false;
            }
        }

        setTimeout(typeLine, isDeleting ? 50 : 100);
    }

    typeLine();
});

function smoothShakeNahda() {
    const el = document.getElementById("nahda-brand");
    let startTime = null;
    const duration = 3000;
    const amplitude = 4;

    function animateShake(timestamp) {
        if (!startTime) startTime = timestamp;
        const elapsed = timestamp - startTime;
        const progress = elapsed / duration;
        const angle = Math.sin(progress * Math.PI * 6);

        el.style.transform = `translateX(${angle * amplitude}px)`;

        if (elapsed < duration) {
            requestAnimationFrame(animateShake);
        } else {
            el.style.transform = 'translateX(0)';
        }
    }

    requestAnimationFrame(animateShake);
}

setInterval(smoothShakeNahda, 500);

window.onload = function () 
{
    const catSound = document.getElementById("cat-sound");
    catSound.volume = 0.3;
    catSound.play();
    document.getElementById("bg-audio").volume = 0.1;
};

function goToAbout() 
{
    window.location.href = "about.html";
}

var animation = lottie.loadAnimation
({
    container: document.getElementById('robot-container'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'ilustrasi-robot.json' // pastikan file ini ada di folder yang sama dengan skill.html
});


function animateOnScroll() {
const leftBox = document.querySelector('.skills-category.left-anim');
const rightBox = document.querySelector('.skills-category.right-anim');
const triggerBottom = window.innerHeight * 0.85;

[leftBox, rightBox].forEach(box => {
    const boxTop = box.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
    box.style.opacity = '1';
    box.style.animationPlayState = 'running';
    }
});
}

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);




