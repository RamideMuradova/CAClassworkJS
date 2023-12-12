let form = document.querySelector("form");
let allInput = document.querySelectorAll("input");
let newArr = JSON.parse(localStorage.getItem("User")) || [];
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
