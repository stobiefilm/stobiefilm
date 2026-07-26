// Pre-load hover sound for every element with a data-sound attribute

console.log("audio.js loaded");

const soundElements = document.querySelectorAll("[data-sound]");

soundElements.forEach(element => {

    const sound = new Audio(element.dataset.sound);

    sound.preload = "auto";
    sound.load();

    element.addEventListener("mouseenter", () => {

        sound.currentTime = 0;
        sound.play().catch(() => {});

    });

});