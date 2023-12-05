const BASE_URL = `https://dog.ceo/api/breeds/image/random`;
let box = document.querySelector(".random");
let img = document.createElement("img");
img.scr = "https://images.dog.ceo/breeds/lhasa/n02098413_7598.jpg";

box.append(img);
setInterval(() => {
  fetch(`${BASE_URL}`)
    .then((response) => response.json())
    .then((data) => {
      img.src = data?.message;
    });
}, 2000);
