var seconds = 0, minutes = 0, hours = 0, stopwatchRunning, i = 1;
var second = document.querySelector("#seconds");
var minute = document.querySelector("#minutes");

function startorstop() {
    if (i % 2 == 1) {
        stopwatchRunning = setInterval(() => {
            seconds++;
            seconds = seconds % 60;
            if (seconds == 0) {
                minutes++;
            }
            if (seconds > 9) {
                second.innerText = seconds;
            }
            else {
                second.innerText = "0" + seconds;
            }

            if (minutes > 9) {
                minute.innerText = minutes;
            }
            else {
                minute.innerText = "0" + minutes;
            }

        }, 1000);
    }
    else {
        clearInterval(stopwatchRunning);
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
    }
    i++;
}

function resetStopwatch() {
    seconds = 0, minutes = 0;
    clearInterval(stopwatchRunning);
    document.querySelector("#seconds").innerText = "00";
    document.querySelector("#minutes").innerText = "00";
}

var start = document.querySelector("#start");
var reset = document.querySelector("#reset");

start.addEventListener('click', startorstop);
reset.addEventListener('click', resetStopwatch);