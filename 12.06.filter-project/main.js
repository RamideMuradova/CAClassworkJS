const BASE_URL = "https://fakestoreapi.com/products";
let allCards = document.querySelector(".allCards");
let electroBtn = document.querySelector(".electroBtn");
let jeweleryBtn = document.querySelector(".jewelery");
let menClohets = document.querySelector(".men");
let womenclohets = document.querySelector(".women");

async function getAllData(endpoint) {
  try {
    const response = await axios(`${BASE_URL}/${endpoint}`);
    console.log(response.data);
    drawProducts(response.data);
  } catch (error) {
    console.log(error);
  }
}
getAllData("")
function drawProducts(array) {
    allCards.innerHTML =""
 array.forEach((element) => {
    allCards.innerHTML +=`
    <div class="card">
        <img src="${element.image}" alt="" />
        <p>${element.title}</p>
        <p>${element.price}</p>
    </div>`;
  });
}


electroBtn.addEventListener("click", function () {
  getAllData("/category/electronics");
});
jeweleryBtn.addEventListener("click", function () {
  getAllData("/category/jewelery");
});
menClohets.addEventListener("click", function () {
  getAllData("/category/men's%20clothing");
});
womenclohets.addEventListener("click", function () {
  getAllData("/category/women's%20clothing");
});
