let startBtn = document.querySelector(".startBtn");
let zero = document.querySelector(".zero");
let stopBtn = document.querySelector(".stopBtn");
let incrementBy = document.querySelector(".incrementBy");
let decrementBy = document.querySelector(".decrementBy");
let reset = document.querySelector(".reset");

let count = 0;
let countInterval;

startBtn.addEventListener("click", function () {
  clearInterval(countInterval);
  console.log("startBtn");
  this.style.background = "green";
  countInterval = setInterval(() => {
    count++;
    zero.innerText = count;
  }, 500);
});

stopBtn.addEventListener("click", function () {
  clearInterval(countInterval);
  console.log("stopBtn");
  this.style.background = "red";
});

incrementBy.addEventListener("click", function () {
  console.log("incrementBy");
  this.style.background = "teal";
  count++;
  zero.innerText = count;
});

decrementBy.addEventListener("click", function () {
  console.log("decrementBy");
  this.style.background = "teal";
  count--;
  zero.innerText = count;
});

reset.addEventListener("click", function () {
  count = 0;
  result.innerText = 0;
  clearInterval(countInterval);

  startBtn.removeAttribute("disabled");
  stopBtn.removeAttribute("disabled");
});

let incrementValue = document.querySelector(".incrementValue");
let decrementValue = document.querySelector(".decrementValue");


incrementValue.addEventListener("click", function () {
    console.log("incrementValue");
    this.style.background = "orange";
  });
  
  decrementValue.addEventListener("click", function () {
    console.log("decrementValue");
    this.style.background = "orange";
  });