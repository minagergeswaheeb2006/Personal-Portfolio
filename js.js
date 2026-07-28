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

darkwhite.onclick = function () {
    document.documentElement.classList.toggle("light");

    if (document.documentElement.classList.contains("light")) {
        icon.className = "fa-solid fa-moon";
    } else {
        icon.className = "fa-solid fa-sun";
    }
};



// function myopj(){
//     this.names = []
//     this.add = (name)=>{this.names.push(name)}
//     this.show= _ =>{
//         for(var i = 0 ; i < this.names.length ; i++)
//         {
//             console.log(this.names[i])
//         }
//     }


// }


// let x = new myopj
// x.add("mina")
// x.add("gerges")
// x.show()