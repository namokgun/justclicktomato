const tomato = document.getElementById("tomato");

const pop = new Audio("pop.mp3");

function press() {

    tomato.classList.add("pressed");

    pop.currentTime = 0;
    pop.play();
}

function release() {
    tomato.classList.remove("pressed");
}

tomato.addEventListener("mousedown", press);
tomato.addEventListener("mouseup", release);
tomato.addEventListener("mouseleave", release);

// 모바일
tomato.addEventListener("touchstart", press);
tomato.addEventListener("touchend", release);