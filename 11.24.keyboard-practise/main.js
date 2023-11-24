let keys = document.querySelectorAll(".key");
let words = document.querySelector(".words");

// console.log(keys);
document.addEventListener("keydown", function (event) {
  //   console.log(event.key);
  keys.forEach((key) => {
    // console.log(key.innerText === event.key);
    if (key.innerText == event.key) {
      key.style.backgroundColor = "red";
      key.style.transform = "scale(1.2)";
    }
  });
  words.innerText += event.key;
});
document.addEventListener("keyup", function (event) {
  keys.forEach((key) => {
    if (key.innerText == event.key) {
      key.style.backgroundColor = "darkcyan";
      key.style.transform = "none";
    }
  });
});
