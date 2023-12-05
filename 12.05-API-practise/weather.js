let curCity = "Goygol";

function getForecast() {
  fetch(
    `https://api.weatherapi.com/v1/current.json?key=de4fcc1d06a64857be7101727222212&q=${curCity}&aqi=no`
  )
    .then((response) => response.json())
    .then((data) => console.log(data));
}
getForecast()