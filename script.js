let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctrlIcon = document.getElementById("ctrlIcon");

song.onloadedmetadata = function () {
    progress.max = song.duration;
    progress.value = song.currentTime;
}

function playPause() {
    if (ctrlIcon.classList.contains("fa-pause")) {
        song.pause();
        ctrlIcon.classList.remove("fa-pause");
        ctrlIcon.classList.add("fa-play");
    } else {
        song.play();
        ctrlIcon.classList.add("fa-pause");
        ctrlIcon.classList.remove("fa-play");
    }
}

song.addEventListener('timeupdate', () => {
    progress.value = song.currentTime;
});

progress.oninput = function () {
    song.currentTime = progress.value;
    ctrlIcon.classList.add("fa-pause");
    ctrlIcon.classList.remove("fa-play");
    song.play();
}

// Dark mode toggle
const icon = document.getElementById("icon");
icon.onclick = function () {
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")) {
        icon.src = "images/sun.png";
    } else {
        icon.src = "images/moon.png";
    }
}

// Image slideshow
let i = 0;
const images = [
    'images/sunao 3.jpg',
    'images/sunao 4.jpg',
];
const time = 2000;

function changeImg() {
    document.querySelector("[name='slide']").src = images[i];
    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }
    setTimeout(changeImg, time);
}

window.onload = changeImg;

// Gallery functionality
function addImage(url) {
    const grid = document.getElementById("image-grid");
    const newImage = document.createElement("img");
    newImage.className = "grid-item";
    newImage.src = url;
    grid.appendChild(newImage);
}

document.addEventListener("DOMContentLoaded", function () {
    const imageUrls = [
        'images/vel1.jpeg',
        'images/vel2.jpeg',
        'images/vel3.jpeg',
        'images/vel4.jpeg',
        'images/vel5.jpeg',
        'images/vel6.jpeg',
        'images/vel7.jpeg',
        'images/vel8.jpeg',
        'images/vel9.jpeg',
        'images/vel1.jpeg',
    ];

    imageUrls.forEach(function (url) {
        addImage(url);
    });

    const form = document.getElementById("add-image");
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        const input = document.getElementById("img-source");
        const imageUrl = input.value.trim();

        if (imageUrl !== "") {
            addImage(imageUrl);
            input.value = "";
        }
    });
});

// Random quote functionality
function randomQuote() {
    const quote = document.getElementById("random-quote");
    const lyrics = [
        `"You love me with your bones."`,
        `"You hold me when I'm broke."`,
        `"You don't ask for a thing."`,
        `"Oh, I hope it's you they put me in the ground by."`,
        `"Know where I've been, where I'm from."`,
        `"You know who took me to prom."`,
        `"You've watched as my legs and pride grew taller."`,
        `"Oh, I wanna be the one you call drunk."`,
        `"Oh, I know that we march to the beat of different drums."`,
        `"We're still so damn young."`,
        `"In and out of believing in love."`,
        `"All I know is love."`,
        `"When push comes to shove."`,
        `"I'll be the one."`,
        `"Round and 'round we go."`,
        `"So much I don't know."`,
        `"Even though this ain't pretty and simple."`,
        `"Like a bed of roses."`,
        `"'Least I know my hope is."`,
        `"That you stick around 'til the end."`,
        `"Cause you're my best friend."`
    ];

    setInterval(() => {
        quote.textContent = lyrics[Math.floor(Math.random() * lyrics.length)];
    }, 3000);
}

randomQuote();
