let tbody = document.querySelector("tbody");
let search = document.querySelector(".search");
let spinner =document.querySelector(".spinner")
const BASE_URL = "http://universities.hipolabs.com";

async function getAllData() {
    spinner.classList.add("show")
  const res = await axios(`${BASE_URL}/search?country=Azerbaijan`);
  spinner.classList.remove("show")
  drawTable(res.data);
  console.log(res.data);
}
getAllData();

function drawTable(array) {
  tbody.innerHTML = "";
  array.forEach((element) => {
    let trElement = document.createElement("tr");
    trElement.innerHTML += `
        <td>${element.name}</td>
        <td>${element.country} </td>
        <td>${element.domains[0]}</td>
        <td>${element.web_pages[0]}</td>
        `;
    tbody.append(trElement);
  });
}
// drawTable(data);

search.addEventListener("input", async function (event) {
    spinner.classList.add("show")
  const res = await axios(`${BASE_URL}/search?country=Azerbaijan&name=${event.target.value}`);
  spinner.classList.remove("show")
  drawTable(res.data);
  console.log(res.data);
});