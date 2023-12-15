const cards = document.querySelector(".cards");
const BASE_URL = `https://restcountries.com/v2`;
const search = document.querySelector(".search");
const select = document.querySelector("select");
let body = document.querySelector("body");
let dark = document.querySelector(".dark");

async function getData(endpoint) {
  let response = await axios(`${BASE_URL}/${endpoint}`);
  countries = response.data;
  drawCards(response.data);
}
getData("all");
function drawCards(data) {
  cards.innerHTML = "";
  data.forEach((element) => {
    const divElem = document.createElement("div");
    divElem.innerHTML = `<a href="">
    <div class="card" style="width: 18rem">
    <img src="${element.flags.svg}" class="card-img-top" alt="..." />
    <div class="card-body">
      <p><h3>${element.name}</h3></p>
      <p>${element.population}</p>
      <p>${element.region}</p>
      <p>${element.capital}</p>
    </div>
  </div>
    </a>
    `;
    cards.append(divElem);
  });
}
search.addEventListener("input", function (e) {
  getData(`name/${e.target.value.toLocaleLowerCase()}`);
});

select.addEventListener("change", function (e) {
  if (e.target.value != "all") {
    getData(`region/${e.target.value}`);
  } else {
    getData(`${e.target.value}`);
  }
});
dark.addEventListener("click", function () {
  body.classList.toggle(".dark");
  localStorage.setItem("mode", body.classList);
});
if (localStorage.getItem("mode") != "") {
  document.body.classList.add(localStorage.getItem("mode"));
}
