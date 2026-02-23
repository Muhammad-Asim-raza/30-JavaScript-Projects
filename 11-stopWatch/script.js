let seconds = 0;
let minutes = 0;
let hours = 0;
let timer;
let isRunning = false;
let display=document.getElementById("stop");
function Start(){
    if(isRunning===true) return;
    isRunning=true;
timer = setInterval(function(){
    seconds++;
    if(seconds==60){
        seconds=0;
        minutes++;
    }
    if(minutes==60){
        minutes=0;
        hours++;
    }
    display.innerText= hours + ":" + minutes + ":" + seconds ;
},1000);
}
function Stop(){
    clearInterval(timer);
    isRunning=false;
}
function Reset(){
    Stop();
    seconds=0;
    minutes=0;
    hours=0;
        display.innerText= hours + ":" + minutes + ":" + seconds ;
}




















































// let seconds = 0;
// let minutes = 0;
// let hours = 0;

// let timer;              // stores setInterval ID
// let isRunning = false;  // true = running, false = stopped

// function updateDisplay() {
//     let h = hours < 10 ? "0" + hours : hours;
//     let m = minutes < 10 ? "0" + minutes : minutes;
//     let s = seconds < 10 ? "0" + seconds : seconds;

//     document.getElementById("display").innerText = h + ":" + m + ":" + s;
// }

// function start() {
//     if (isRunning === true) return; // already running, do nothing

//     isRunning = true;

//     timer = setInterval(function () {
//         seconds++;

//         if (seconds === 60) {
//             seconds = 0;
//             minutes++;
//         }

//         if (minutes === 60) {
//             minutes = 0;
//             hours++;
//         }

//         updateDisplay();
//     }, 1000);
// }

// function stop() {
//     clearInterval(timer);
//     isRunning = false;
// }

// function reset() {
//     stop();
//     seconds = 0;
//     minutes = 0;
//     hours = 0;
//     updateDisplay();
// }