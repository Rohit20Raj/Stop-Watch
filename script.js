function startOrStop() {
    if (watchRunning == false) {
        stopWatch = setInterval(() => {

            msec++;
            msec = msec % 100;
            seconds = seconds % 60;
            minutes = minutes % 60;

            if (msec == 99) {
                seconds++;
            }
            if (seconds == 59 && msec == 0) {
                minutes++;
            }
            if (minutes == 59 && seconds == 59 && msec == 99) {
                hours++;
            }

            if (msec < 10) {
                ms.innerText = "0" + msec;
            }
            else {
                ms.innerText = msec;
            }

            if (seconds < 10) {
                second.innerText = "0" + seconds;
            }
            else {
                second.innerText = seconds;
            }
            if (minutes < 10) {
                minute.innerText = "0" + minutes;
            }
            else {
                minute.innerText = minutes;
            }
            hour.innerText = hours;
            watchRunning = true;
            playOrPause.innerHTML = '<img src="images/pause-button.png">'
        }, 10);
    }
    else {
        clearInterval(stopWatch);
        watchRunning = false;
        playOrPause.innerHTML = '<img src="images/play-button-arrowhead.png">';
    }
}

function resetWatch() {
    clearInterval(stopWatch);
    hours = 0, minutes = 0, seconds = 0, msec = 0, watchRunning = false;
    ms.innerText = "00";
    second.innerText = "00";
    minute.innerText = "00";
    hour.innerText = "0";
    playOrPause.innerHTML = '<img src="images/play-button-arrowhead.png">';
}

var hours = 0, minutes = 0, seconds = 0, msec = 0, watchRunning = false, stopWatch;

var ms = document.querySelector("#ms");
var second = document.querySelector("#seconds");
var minute = document.querySelector("#minutes");
var hour = document.querySelector("#hours");

var playOrPause = document.querySelector("#play");
var reset = document.querySelector("#reset");

playOrPause.addEventListener("click", startOrStop);
reset.addEventListener("click", resetWatch);
