let tbody = document.querySelector("tbody");
function drawTable(tableBody) {
  tbody.innerHTML = "";
  tableBody.forEach((element) => {
    let trElement = document.createElement("tr");
    trElement.innerHTML += `
        <td>${element.university.name}</td>
        <td>${element.country} </td>
        <td>${element.domaines}</td>
        <td>${element.website}</td>
        `;
    tbody.append(trElement);
  });
}
drawTable(data);
getAllData