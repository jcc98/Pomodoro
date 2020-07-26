//target IDs with DOM
const btnClick = document.getElementById('btn1');
const btnClickSecond = document.getElementById('btn2');
const time = document.getElementById('time');
const timeBreak = document.getElementById('time-break');
const exp = document.getElementById('explanation');
const expContent = document.getElementById('explanation-content');
const submitTask = document.getElementById('submit-task');
const task = document.getElementById('task');
const span = document.getElementById('the-task');
const insertPomCounter = document.getElementById('insert-counter');

//POMODORO variables
let secPom = 0;
let minPom = 25;
let secBreak = 0;
let minBreak = 5;
let pomCounter = 0;
let setIntervalTimer;
let setBreakTimer;
let setPauseTimer;
let minPause;
let secPause;
let storeTask;


//toggle pomodoro definition
exp.addEventListener("click", () => expContent.classList.toggle("toggle-exp-content"));


//25 minute start onclick (anonymous function)
btnClick.onclick = function toggle() {
    if (minPom !== 25 && secPom === 0) {
        timerBreak();
    }
    if (storeTask.length > 3) {
        // if (minBreak === 5 && secBreak === 0) {
        setIntervalTimer = setInterval(function () {
            time.textContent = `${minPom} : ${secPom}`;

            if (secPom === 0) {
                minPom--;
                secPom = 60;
            }
            secPom--;


            if (secPom < 10) {
                time.textContent = `${minPom} : 0${secPom}`
            }

            if (minPom === 0 && secPom === 0) {
                pomCounter++;
                insertPomCounter.innerHTML = pomCounter;
                clearInterval(setIntervalTimer)
                timerBreak();


            }

            if (minPom < 10) {
                time.textContent = `0${minPom} : ${secPom}`
            }
        }, 1000);
        // }
    };
}

//5 MINUTE BREAK TIMER  (anonymous function)
function timerBreak() {
    setBreakTimer = setInterval(function () {
        timeBreak.textContent = `${minBreak} : ${secBreak}`;

        if (secBreak === 0 & minBreak === 0) {
            clearInterval(setBreakTimer);
            minPom = 25;
            minBreak = 5;
            btnClick.click();

        }

        if (secBreak === 0) {
            minBreak--;
            secBreak = 60;
        }
        secBreak--;

    }, 1000);
}


// pauses timer
btnClickSecond.onclick = () => {
    clearInterval(setIntervalTimer);
    if (minPom === 0 && secPom === 0) {
        clearInterval(setBreakTimer);
    }
}

// stores task value and displays it on top page
submitTask.onclick = () => {
    storeTask = task.value;
    if (storeTask.length >= 5 && (secPom === 0)) {
        span.textContent = `Current task: ${storeTask}`;
    }
    else {
        alert("Please enter a valid value");
    }
}