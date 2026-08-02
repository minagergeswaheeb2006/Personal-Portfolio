const slider = document.querySelector(".project-cards");
slider.innerHTML += slider.innerHTML;
slider.innerHTML += slider.innerHTML;
slider.innerHTML += slider.innerHTML;
let position = 0;
const speed = 0.6;

let pause = false;

slider.addEventListener("mouseenter", () => {
    pause = true;
});

slider.addEventListener("mouseleave", () => {
    pause = false;
});

function animate() {

    if (!pause) {

        position -= speed;

        if (Math.abs(position) >= slider.scrollWidth / 2) {
            position = 0;
        }

        slider.style.transform = `translateX(${position}px)`;
    }

    requestAnimationFrame(animate);
}

animate();
let isDragging = false;
let startX = 0;
let startPosition = 0;

slider.addEventListener("mousedown", (e) => {
    isDragging = true;
    startX = e.pageX;
    startPosition = position;
    slider.style.cursor = "grabbing";
});

window.addEventListener("mouseup", () => {
    isDragging = false;
    slider.style.cursor = "grab";
});

window.addEventListener("mousemove", (e) => {

    if (!isDragging) return;

    const walk = e.pageX - startX;

    position = startPosition + walk;

    slider.style.transform = `translateX(${position}px)`;

});



var darkwhite = document.getElementById("toggle");
var icon = document.getElementById("icon");
var buttonplace =document.getElementById("button-place")
darkwhite.onclick = function () {
    document.documentElement.classList.toggle("dark");
    
    if (document.documentElement.classList.contains("dark")) {
        icon.className = "fa-solid fa-moon";
        buttonplace.style="justify-content: flex-start; "
    } else {
        icon.className = "fa-solid fa-sun";
    }
};

var cont2 = document.getElementById("cont2");
var cont3 = document.getElementById("cont3");
var cont4 = document.getElementById("cont4");

window.onscroll = function () {
    if (window.scrollY >= cont2.offsetTop - 300) {
        cont2.style.opacity = "1";
    } else {
        cont2.style.opacity = "0";
    }
    if (window.scrollY >= cont3.offsetTop - 300) {
        cont3.style.opacity = "1";
    } else {
        cont3.style.opacity = "0";
    }
    if (window.scrollY >= cont4.offsetTop - 550) {
        cont4.style.opacity = "1";
    } else {
        cont4.style.opacity = "0";
        
    }
}
var loader = document.getElementById("loader")
var portodisplay = document.getElementById("portodisplay")

window.onload = function(){
    setInterval(function(){
        document.getElementById("loader").style.display="none";
        document.getElementById("portodisplay").classList.remove("all-broject");
    },3000)
}
