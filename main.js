let typingText = new Typed("#text", {
    strings: ["Meu nome é Joicemar", "Sou Dev front-end", "Sou Programador" ],
    loop: true,
    backDelay: 3000,
    typeSpeed: 80,
    backSpeed: 20,
    loop: true,
})

const circle = document.querySelector(".dayNight");
let body = document.querySelector(".body");


let dayNight = document.querySelector("#day-select");
dayNight.addEventListener('click', function () {
    if (body.classList.contains("day")) {
        body.classList.remove("day");
        body.classList.add("night");
    } else {
        body.classList.remove("night");
        body.classList.add("day");
    }
});

let bars = document.querySelector(".bars");
let menu = document.querySelector(".menu");

bars.addEventListener('click', function () {

    menu.classList.toggle('active');

});

// Cursor do mouse:
document.addEventListener("mousemove", function (event) {
    const circle = document.querySelector(".circle");
    let x = event.clientX - circle.offsetWidth / 2;
    let y = event.clientY - circle.offsetHeight / 2;
    circle.style.left = x + "px";
    circle.style.top = y + "px";
});
document.addEventListener('mouseout', () => {
    // remove o círculo do DOM quando o mouse sai da página
    circle.remove();
});