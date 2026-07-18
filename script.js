const tomato = document.getElementById("tomato");

function press(){
    tomato.classList.add("pressed");
}

function release(){
    tomato.classList.remove("pressed");
}

tomato.addEventListener("mousedown", press);
tomato.addEventListener("mouseup", release);
tomato.addEventListener("mouseleave", release);

// 모바일
tomato.addEventListener("touchstart", press);
tomato.addEventListener("touchend", release);