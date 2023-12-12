const logOut = document.querySelector(".log-out");
// window.addEventListener("load", function () {
//   localStorage.getItem("users")
//     ? null
//     : (window.location = "login.html");
// });
logOut.addEventListener("click", function () {
  confirm("are you sure log out?") && localStorage.clear();
  window.location.reload();
});
