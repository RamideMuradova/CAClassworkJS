let arr = JSON.parse(localStorage.getItem("key")) ?? [];
let add = document.querySelector("add");
let addBtn = document.querySelector("addBtn");

$(".addBtn").on("click", function () {
  let text = document.createElement("p");
  text.innerText = $("input").val();
  document.body.append(text);
  $("input").val("");
  $("p").css({
    backgroundColor: "blue",
    padding: "5px",
    borderRadius: "5px",
    margin: "10px",
    width: "50px",
  });
  $("input").val("");
  $("p").on("click", function () {
    this.remove();
  });
  arr.push(text.innerText);
  localStorage.setItem("key", JSON.stringify(arr));
});
function inputArr(element) {
  element.forEach((item) => {
    let word = document.createElement("p");
    word.innerText = item;
    document.body.append(word);
    $("p").css({
      backgroundColor: "blue",
      padding: "5px",
      borderRadius: "5px",
      margin: "10px",
      width: "50px",
    });
    $("p").on("click", function () {
      this.remove();
    });
  });
}

inputArr(arr)