let ulList = document.querySelector(".ulList");
let span = document.querySelector(".span");
let addInput = document.querySelector(".addInput");
let add = document.querySelector(".add");

add.addEventListener("click", function () {
  console.log(addInput.value);

  let liEl = document.createElement("li");
  let spanEl = document.createElement("span");
  let deleteBtn = document.createElement("button");

  spanEl.innerText = addInput.value;
  deleteBtn.innerText = "Delete";
  deleteBtn.className = "delete";

  liEl.append(spanEl, deleteBtn);
  ulList.append(liEl);
  addInput.value = "";
  deleteBtn.addEventListener('click',function(){
    this.parentElement.remove()
  })
});

