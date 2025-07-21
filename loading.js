// شعارهای تبلیغاتی
const slogans = [
  "با گیرا، برندت رو جهانی کن!",
  "بازار منتظر شماست... با گیرا شروع کن!",
  "گیرا یعنی هدف‌گیری هوشمند",
  "تبلیغاتی که می‌فروشن، با گیرا شروع میشن!",
  "رشدت با یک کلیک شروع میشه!",
  "گیرا، قدرت دیده شدن!"
];

// نمایش شعار تصادفی
const randomIndex = Math.floor(Math.random() * slogans.length);
document.getElementById("tagline").textContent = slogans[randomIndex];

// شمارش معکوس
const launchDate = new Date();
launchDate.setDate(launchDate.getDate() + 38);

function updateCountdown() {
  const now = new Date();
  const timeLeft = launchDate - now;

  const days = Math.max(0, Math.floor(timeLeft / (1000 * 60 * 60 * 24)));
  const hours = Math.max(0, Math.floor((timeLeft / (1000 * 60 * 60)) % 24));
  const minutes = Math.max(0, Math.floor((timeLeft / (1000 * 60)) % 60));
  const seconds = Math.max(0, Math.floor((timeLeft / 1000) % 60));

  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours.toString().padStart(2, '0');
  document.getElementById("minutes").textContent = minutes.toString().padStart(2, '0');
  document.getElementById("seconds").textContent = seconds.toString().padStart(2, '0');
}

setInterval(updateCountdown, 1000);
updateCountdown();

// افکت ذرات
particlesJS("particles-js", {
  "particles": {
    "number": { "value": 60 },
    "color": { "value": "#00ffe1" },
    "shape": { "type": "circle" },
    "opacity": { "value": 0.4 },
    "size": { "value": 3 },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#00ffe1",
      "opacity": 0.3,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 2
    }
  },
  "interactivity": {
    "events": {
      "onhover": { "enable": true, "mode": "grab" }
    }
  },
  "retina_detect": true
});
