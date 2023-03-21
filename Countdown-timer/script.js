const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");

const webStart = "21 Nov 2022";

function countdown() {
  const webStartDate = new Date(webStart);
  var currentDate = new Date();
  const totalSeconds = (webStartDate - currentDate) / 1000;

  const days = Math.floor(totalSeconds / (3600 * 24));
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const mins = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;

  // Math.floor = renvoie au plus grand nombre entier inférieur ( on veut pas de décimales ici)

  daysEl.innerHTML = days;
  hoursEl.innerHTML = formatTime(hours);
  minsEl.innerHTML = formatTime(mins);
  secondsEl.innerHTML = formatTime(seconds);
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

// initial call
countdown();

// pour répéter la fonction
setInterval(countdown);
