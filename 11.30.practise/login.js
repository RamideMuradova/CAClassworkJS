let form = document.querySelector(".login");
let email = document.querySelector(".email-address");
let password = document.querySelector(".password");
form.addEventListener("submit", function () {
  if (email.value != "" && password.value != "") {
    let obj = {
      email: email.value,
      password: password.value,
    };
    console.log(obj);
  } else {
    window.alert("formu doldurun");
  }
});
