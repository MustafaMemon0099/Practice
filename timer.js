let input = document.querySelector("#timeInput");
let btn = document.querySelector("#startBtn");
let display = document.querySelector("#display");
let interval;

btn.addEventListener("click", function () {
  let count = parseInt(input.value);
  clearInterval(interval);

  if (isNaN(count) || count <= 0) {
    display.textContent = "Please enter valid seconds!";
    return;
  }

  display.textContent = count;

  interval = setInterval(function () {
    if (count > 0) {
      count--;
      display.textContent = count;
    } else {
      clearInterval(interval);
      display.textContent = "⏰ Time Up!";
    }
  }, 1000);
});
