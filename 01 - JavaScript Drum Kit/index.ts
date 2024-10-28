const audioElems = document.querySelectorAll("audio");


window.addEventListener("keydown", (event) => {
    console.log(event.keyCode);
    const audio: HTMLAudioElement = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    const div = document.querySelector(`div[data-key="${event.keyCode}"]`);
    audio.play().then(() => {
        div.classList.add("playing");
        setTimeout(() => {div.classList.remove("playing")}, 500);
    });

})
