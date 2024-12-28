

// Buttons
let startBtn = document.getElementById("start");
let stopBtn = document.getElementById("stop");
let resetBtn = document.getElementById("reset");
let lapBtn = document.getElementById("lap");

// Time variables
let hour = 0;
let minute = 0;
let second = 0;
let count = 0;
let timer = false;

// Lap container
let lapTimes = document.getElementById("lapTimes");

// Start the stopwatch
startBtn.addEventListener("click", function () {
    if (!timer) {
        timer = true;
        stopWatch();
    }
});

// Stop the stopwatch
stopBtn.addEventListener("click", function () {
    timer = false;
});

// Reset the stopwatch
resetBtn.addEventListener("click", function () {
    timer = false;
    hour = 0;
    minute = 0;
    second = 0;
    count = 0;
    updateDisplay();
    lapTimes.innerHTML = ""; // Clear lap records
});

// Record a lap
lapBtn.addEventListener("click", function () {
    if (timer) {
        let hrString = hour < 10 ? "0" + hour : hour;
        let minString = minute < 10 ? "0" + minute : minute;
        let secString = second < 10 ? "0" + second : second;
        let countString = count < 10 ? "0" + count : count;

        let lapTime = `${hrString}:${minString}:${secString}:${countString}`;
        let lapItem = document.createElement("li");
        lapItem.textContent = lapTime;
        lapTimes.appendChild(lapItem);
    }
});

// Stopwatch function
function stopWatch() {
    if (timer) {
        count++;

        if (count === 100) {
            second++;
            count = 0;
        }

        if (second === 60) {
            minute++;
            second = 0;
        }

        if (minute === 60) {
            hour++;
            minute = 0;
            second = 0;
        }

        updateDisplay();
        setTimeout(stopWatch, 10);
    }
}

function updateDisplay() {
    document.getElementById("hr").textContent = hour < 10 ? "0" + hour : hour;
    document.getElementById("min").textContent = minute < 10 ? "0" + minute : minute;
    document.getElementById("sec").textContent = second < 10 ? "0" + second : second;
    document.getElementById("count").textContent = count < 10 ? "0" + count : count;
}