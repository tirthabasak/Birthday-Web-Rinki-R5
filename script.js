const heartLayer = document.getElementById("heartLayer");

const hearts = [
    "♡",
    "♥",
    "♡",
    "💕",
    "💗",
    "💖",
    "♡",
    "♥"
];


function createHeart(){

    const heart = document.createElement("span");

    heart.innerHTML =
        hearts[Math.floor(Math.random() * hearts.length)];

    heart.style.left =
        Math.random() * 100 + "vw";

    heart.style.fontSize =
        (12 + Math.random() * 30) + "px";

    heart.style.animationDuration =
        (4 + Math.random() * 7) + "s";

    heart.style.opacity =
        0.4 + Math.random() * 0.6;

    heartLayer.appendChild(heart);


    setTimeout(() => {

        heart.remove();

    },13000);
}


/* প্রথমে অনেকগুলো */

for(let i = 0; i < 60; i++){

    setTimeout(
        createHeart,
        i * 80
    );

}


/* এরপর continuously */

setInterval(
    createHeart,
    180
);