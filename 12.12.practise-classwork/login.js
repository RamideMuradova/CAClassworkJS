let form = document.querySelector("form");
let allInput = document.querySelectorAll("input");
let newArr = JSON.parse(localStorage.getItem("User")) || [];
let icon = document.querySelector(".fa-eye");
let icon2 = document.querySelector(".fa-eye-slash");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  let bool = newArr.find((item) => {
    return (
      item.Email === allInput[0].value && item.Password === allInput[1].value
    );
  })
  if(bool){
    window.location="home.html"
  }else{
    alert("istifadeci tapilmadi")
  }
});
icon.addEventListener("click", function () {
  allInput[1].type = "text";
  this.style.display = "none";
  icon2.style.display = "block";
});
icon2.addEventListener("click", function () {
  allInput[1].type = "password";
  this.style.display = "none";
  icon.style.display = "block";
});
