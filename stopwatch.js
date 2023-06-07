const minutesInput = prompt('Please enter the duration in minutes:');
const secondsInput = prompt('Please enter the duration in seconds:');

const minutes = parseInt(minutesInput) || 0;
const seconds = parseInt(secondsInput) || 0;

let timer = minutes * 60 + seconds;

const countDown = document.getElementById("timey");

// Add these global variables to keep track of the timer state
let isPaused = false;
let intervalId;

// Start the timer immediately
intervalId = setInterval(updateCountDown, 1000);

function pauseTimer() {
  if (isPaused) return; // Ignore if already paused

  clearInterval(intervalId);
  isPaused = true;
}

function playTimer() {
  if (!isPaused) return; // Ignore if not paused

  isPaused = false;
  intervalId = setInterval(updateCountDown, 1000);
}

function updateCountDown() {
  if (isPaused) return; // Ignore if paused

  const minutes = Math.floor(timer / 60);
  let seconds = timer % 60;
  seconds = seconds < 10 ? '0' + seconds : seconds;
  countDown.innerHTML = `${minutes}:${seconds}`;

  if (timer <= 0) {
    clearInterval(intervalId);
    alert("Timer has reached 0 seconds!");
  }

  timer--;
}

setInterval(() => {
  let k = new Date();
  let timeElement = document.getElementById("time2");
  let dateElement = document.getElementById("date2");

  timeElement.innerHTML = k.toLocaleTimeString();
  dateElement.innerHTML =
    k.getDate() 
    + " / " + 
    (k.getMonth() + 1)
    + " / " + 
    k.getFullYear();
}, 1000);