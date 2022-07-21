function startOrStop() {
    if (watchRunning == false) {
        stopWatch = setInterval(() => {
            seconds = seconds + 0.01;
            seconds = seconds%60;
            minutes = minutes%60;
            if (seconds.toFixed(2) == 59.99) {
                // seconds = 0;
                minutes = minutes + 1;
            }
            if (minutes == 59 && seconds.toFixed(2) == 59.99) {
                // minutes = 0;
                hours++;
            }

            if(seconds < 10){
                second.innerText = "0"+seconds.toFixed(2);
            }
            else{
                second.innerText = seconds.toFixed(2);
            }
            if(minutes < 10){
                minute.innerText = "0"+minutes;
            }
            else{
                minute.innerText = minutes;
            }
            hour.innerText = hours;
            watchRunning = true;
            console.log(seconds.toFixed(2));
        }, 10);
    }
    else {
        clearInterval(stopWatch);
        watchRunning = false;
    }
}

function resetWatch(){
    clearInterval(stopWatch);
    hours = 0, minutes = 0, seconds = 0, watchRunning = false;
    second.innerText = "00.00";
    minute.innerText = "00";
    hour.innerText = "0";
}

var hours = 0, minutes = 0, seconds = 0, watchRunning = false, stopWatch;

var second = document.querySelector("#seconds");
var minute = document.querySelector("#minutes");
var hour = document.querySelector("#hours");

var playOrPause = document.querySelector("#play");
var reset = document.querySelector("#reset");

playOrPause.addEventListener("click", startOrStop);
reset.addEventListener("click", resetWatch);
