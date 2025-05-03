let data = {
    A: { name: "Apple", sound: "sound/arjun.mp3" },
    B: { name: "Ball", sound: "sound/balram.mp3" },
    C: { name: "Cat", sound: "sound/chanakya.mp3" },
    D: { name: "Dog", sound: "sound/dhruva.mp3" },
    E: { name: "Elephant", sound: "sound/ekalavya.mp3" },
    F: { name: "Fish", sound: "sound/fourvedas.mp3" },
    G: { name: "Grapes", sound: "sound/gyatrimata.mp3" },
    H: { name: "Horse", sound: "sound/hanuman.mp3" },
    I: { name: "Icecream", sound: "sound/indra.mp3" },
    J: { name: "Jug", sound: "sound/jatayu.mp3" },
    K: { name: "Kite", sound: "sound/krishna.mp3" },
    L: { name: "Lion", sound: "sound/lavkusha.mp3" },
    M: { name: "Monkey", sound: "sound/markandeya.mp3" },
    N: { name: "Nest", sound: "sound/narada.mp3" },
    O: { name: "Orange", sound: "sound/omkara.mp3" },
    P: { name: "Pigeon", sound: "sound/prahlada.mp3" },
    Q: { name: "Queen", sound: "sound/queengandhari.mp3" },
    R: { name: "Rabbit", sound: "sound/rama.mp3" },
    S: { name: "Swan", sound: "sound/surya.mp3" },
    T: { name: "Tiger", sound: "sound/tulasi.mp3" },
    U: { name: "Umbrella", sound: "sound/uddhava.mp3" },
    V: { name: "Van", sound: "sound/vamanavatar.mp3" },
    W: { name: "Watch", sound: "sound/waterganga.mp3" },
    X: { name: "XmasTree", sound: "sound/xeerabdidwadasi.mp3" },
    Y: { name: "Yak", sound: "sound/yashoda.mp3" },
    Z: { name: "Zebra", sound: "sound/zambavantha.mp3" },
};

let drumkit = document.getElementById("drumkit");
let playingSound = null;
let previousActive = null;

function createDrumKit() {
    for (let key in data) {
        let drumElement = document.createElement("div");
        drumElement.classList.add("element", data[key].name.replace(/\s+/g, "")); 
        drumkit.appendChild(drumElement);

        let h2 = document.createElement("h2");
        h2.textContent = key;
        drumElement.appendChild(h2);

        let span = document.createElement("span");
        span.textContent = data[key].name;
        drumElement.appendChild(span);

        drumElement.addEventListener("click", function () {
            playDrum(key);
        });
    }
}

function playDrum(key) {
    if (data.hasOwnProperty(key)) {
        let drumElement = document.querySelector(`.element.${data[key].name.replace(/\s+/g, "")}`);

        if (previousActive) {
            previousActive.classList.remove("active");
        }
        drumElement.classList.add("active");

        if (playingSound) {
            playingSound.pause();
            playingSound.currentTime = 0;
        }

        let audio = new Audio();
        audio.src = data[key].sound;
        audio.play();
        playingSound = audio;
        previousActive = drumElement;
    }
}

document.addEventListener("keydown", function (event) {
    playDrum(event.key.toUpperCase());
});

createDrumKit();
