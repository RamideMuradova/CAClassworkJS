const form = document.querySelector("form");
const allInputs = document.querySelectorAll(".form-control");

const BASE_URL = `http://localhost:3000`;

const id = new URLSearchParams(window.location.search).get("id");
async function fillForm() {
  const res = await axios(`${BASE_URL}/users/${id}`);
  console.log(res.data);

  allInputs[0].value = res.data.id;
  allInputs[1].value = res.data.userphoto;
  allInputs[2].value = res.data.name;
  allInputs[3].value = res.data.surname;
  allInputs[4].value = res.data.email;
  allInputs[5].value = res.data.date;
}
