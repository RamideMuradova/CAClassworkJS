let fullName = "Ramide  Muradova";
let age = "20";
let skills = ["read","dance","write"];
console.log(window.localStorage);

localStorage.setItem("fullName", "Ramide Muradova");
console.log(localStorage.getItem("fullName"));
// localStorage.removeItem("fullName");