const countdownDate = new Date("May 25, 2025 09:00:00").getTime();
const timer = document.getElementById("timer");
const expiredMsg = document.getElementById("expired");

function updateCountdown() {
    const now = new Date().getTime();
    const timeDiff = countdownDate - now;

    if (timeDiff <= 0) {
    clearInterval(interval);
    timer.classList.add("hidden");
    expiredMsg.classList.remove("hidden");
    return;
    }

    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
}

const interval = setInterval(updateCountdown, 1000);
updateCountdown();