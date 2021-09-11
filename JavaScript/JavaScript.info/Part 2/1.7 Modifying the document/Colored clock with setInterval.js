let interval;

let clockEl = document.getElementById('clock');
let hoursEl = document.querySelector('.hours');
let minutesEl = document.querySelector('.minutes');
let secondsEl = document.querySelector('.seconds');

function clockStart() {

    interval = setInterval(() => {
        let now = new Date();

        hoursEl.textContent = leadingZero(now.getHours());
        minutesEl.textContent = leadingZero(now.getMinutes());
        secondsEl.textContent = leadingZero(now.getSeconds());
    }, 1000);

}

function clockStop() {

    clearInterval(interval);
}

clockStart();

function leadingZero(num) {
    return ('0' + num).slice(-2);
}
