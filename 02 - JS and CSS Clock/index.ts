setInterval(() => {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    const hour_transform = `rotate(${hours*15}deg)`;
    const minute_transform = `rotate(${minutes*6}deg)`;
    const second_transform = `rotate(${seconds*6}deg)`;

    const hourElem: HTMLElement = document.querySelector(".hand.hour-hand");
    const minuteElem: HTMLElement = document.querySelector(".hand.min-hand");
    const secondElem: HTMLElement = document.querySelector(".hand.second-hand");
    hourElem.style.transform = hour_transform;
    minuteElem.style.transform = minute_transform;
    secondElem.style.transform = second_transform;

}, 1000);