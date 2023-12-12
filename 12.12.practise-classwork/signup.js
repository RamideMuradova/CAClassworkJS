let form = document.querySelector("form");
let allInput = document.querySelectorAll(".all");
let newArr = JSON.parse(localStorage.getItem("User")) || [];
form.addEventListener("submit", function (e) {
  let bool = newArr.some((item) => {
    return item.Username === allInput[0].value || item.Password === allInput[2];
  });
  if (!bool) {
    e.preventDefault();
    let obj = {
      Username: allInput[0].value,
      Email: allInput[1].value,
      Password: allInput[2].value,
    };
    newArr.push(obj);
    localStorage.setItem("User", JSON.stringify(newArr));
  } else {
    alert("bele istifadeci var");
  }
});
