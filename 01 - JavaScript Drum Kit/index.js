var audioElems = document.querySelectorAll("audio");
window.addEventListener("keydown", function (event) {
    console.log(event.keyCode);
    var audio = document.querySelector("audio[data-key=\"".concat(event.keyCode, "\"]"));
    var div = document.querySelector("div[data-key=\"".concat(event.keyCode, "\"]"));
    audio.play().then(function () {
        div.classList.add("playing");
        setTimeout(function () { div.classList.remove("playing"); }, 500);
    });
});
