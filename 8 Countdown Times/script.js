// Getting DOM Elements
const daysElements = document.getElementById("days");
const hoursElements = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");

// New Years Eve
const newYears = "1/1/2023";

// Function to calclate the time and dispaly it on UI
function countdown() {
  const newYearsDate = new Date(newYears);
  const currentDate = new Date();

  const totalSeconds = (newYearsDate - currentDate) / 1000;

  const hours = Math.floor(totalSeconds / 3600) % 24;

  const minutes = Math.floor(totalSeconds / 60) % 60;

  const days = Math.floor(totalSeconds / 3600 / 24);
  const seconds = Math.floor(totalSeconds % 60);

  // Display the result
  daysElements.innerHTML = formatTime(days);
  hoursElements.innerHTML = formatTime(hours);
  minutesElement.innerHTML = formatTime(minutes);
  secondsElement.innerHTML = formatTime(seconds);
}

//  Functio for simple formating
function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

// Initiial call
countdown();

setInterval(countdown, 1000);
