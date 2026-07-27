const slider = document.querySelector(".project-cards");
slider.innerHTML += slider.innerHTML;
slider.innerHTML += slider.innerHTML;
slider.innerHTML += slider.innerHTML;
let position = 0;
const speed = 1;

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