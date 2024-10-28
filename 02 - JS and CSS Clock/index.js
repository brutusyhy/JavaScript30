setInterval(function () {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var hour_transform = "rotate(".concat(hours * 15, "deg)");
    var minute_transform = "rotate(".concat(minutes * 6, "deg)");
    var second_transform = "rotate(".concat(seconds * 6, "deg)");
    var hourElem = document.querySelector(".hand.hour-hand");
    var minuteElem = document.querySelector(".hand.min-hand");
    var secondElem = document.querySelector(".hand.second-hand");
    hourElem.style.transform = hour_transform;
    minuteElem.style.transform = minute_transform;
    secondElem.style.transform = second_transform;
}, 1000);
