let curCity = "baku";
let country = document.querySelector(".country");

function getForecast() {
  fetch(
    `https://api.weatherapi.com/v1/current.json?key=de4fcc1d06a64857be7101727222212&q=${curCity}&aqi=no`
  )
    .then((response) => response.json())
    .then(
      (data) =>
        (dataWeahter.innerHTML = `<p>${data.location?.name}</p>
      <img src="${data.current.condition.icon}"alt=""
      <p>${data.current.condition.text}</p>
      <p>${data.current.temp_c}</p>
      <p>${data.current.temp_f}</p>
      <p>${data.location.localtime_epoch}</p>`)
    );
}
getForecast();
