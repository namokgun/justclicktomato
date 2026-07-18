const tomato = document.getElementById("tomato");

let isExploded = false;

function press() {

    if (isExploded) return;

    tomato.classList.add("pressed");

    if (Math.random() < 0.02) {

        isExploded = true;

        tomato.src = "boom.png";

        tomato.classList.remove("pressed");

        setTimeout(() => {
            tomato.style.visibility = "hidden";
        }, 500);

        setTimeout(() => {
            tomato.src = "tomato.png";
            tomato.style.visibility = "visible";
            isExploded = false;
        }, 1500);
    }
}

function release() {
    tomato.classList.remove("pressed");
}

tomato.addEventListener("mousedown", press);
tomato.addEventListener("mouseup", release);
tomato.addEventListener("mouseleave", release);

tomato.addEventListener("touchstart", press);
tomato.addEventListener("touchend", release);