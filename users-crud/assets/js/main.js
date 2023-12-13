const tbody = document.querySelector("tbody");
const BASE_URL = `http://localhost:3000`;

let users=null;

async function getData() {
  let response = await axios(`${BASE_URL}/users`);
  users = response.data;
  drawTable(response.data);
}
getData();
function drawTable(data) {
  tbody.innerHTML = "";
  data.forEach((element) => {
    const trElem = document.createElement("tr");
    trElem.innerHTML = `
    <tr>
                    <td>${element.id}</td>
                    <td><img src="${element.userphoto}"</td>
                    <td>${element.name}</td>
                    <td>${element.surname}</td>
                    <td>${element.email}</td>
                    <td>${element.date}</td>
                    
                    <td><button class ="btn btn-success" onclick=editOnclick(${element.id},this)>Edit</td>
                    <td><button class ="btn btn-danger" onclick=deleteOnclick(${element.id},this)>Delete</td>
                    <td><button class ="btn btn-primary" onclick=favOnclick(${element.id},this)>Fav</td>
                </tr>`;
    tbody.append(trElem);
  });
}
async function deleteUser(id) {
  await axios.delete(`${BASE_URL}/users/${id}`);
}
