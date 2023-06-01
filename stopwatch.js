const minutesInput = prompt('Please enter the duration in minutes:');
const secondsInput = prompt('Please enter the duration in seconds:');

const minutes = parseInt(minutesInput) || 0;
const seconds = parseInt(secondsInput) || 0;

let timer = minutes * 60 + seconds;

const countDown = document.getElementById("timey");

const intervalId = setInterval(updateCountDown, 1000);

function updateCountDown() {
  const minutes = Math.floor(timer / 60);
  let seconds = timer % 60;
  seconds = seconds < 10 ? '0' + seconds : seconds;
  document.getElementById("timey").innerHTML = `${minutes}:${seconds}`;

  if (timer <= 0) {
    clearInterval(intervalId);
    alert("Timer has reached 0 seconds!");
  }

  timer--;
}