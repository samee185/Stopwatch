let stopwatchInterval;
let seconds = 0;
let minutes = 0;
let hours = 0;

function startStopwatch() {
    stopwatchInterval = setInterval(updateStopwatch, 1000);
}

function stopStopwatch() {
    clearInterval(stopwatchInterval);
}

function resetStopwatch() {
    clearInterval(stopwatchInterval);
    seconds = 0;
    minutes = 0;
    hours = 0;
    updateStopwatch();
}

function updateStopwatch() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
    }
    if (minutes === 60) {
        minutes = 0;
        hours++;
    }

    const timeString = pad(hours) + ':' + pad(minutes) + ':' + pad(seconds);
    document.getElementById('time').textContent = timeString;
}

function pad(number) {
    return (number < 10) ? '0' + number : number;
}