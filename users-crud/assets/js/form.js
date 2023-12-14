const form = document.querySelector("form");
const allInputs = document.querySelectorAll(".form-control");

const BASE_URL = `http://localhost:3000`;

const id = new URLSearchParams(window.location.search).get("id");
async function fillForm() {
  const res = await axios(`${BASE_URL}/users/${id}`);
  console.log(res.data);

  
}
