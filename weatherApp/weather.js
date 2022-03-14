const input = document.getElementsByTagName("input")[0];
const submit = document.getElementsByTagName("button")[0];
const message = document.getElementsByClassName("msg")[0];
const cities = document.getElementsByClassName("cities")[0];
const myKey = "0a1cd440ad9edbcfe0ca499713c82635";
const baseURL = "https://api.openweathermap.org/data/2.5/weather?q=";
const citiesArr = [];

submit.addEventListener("click", (e) => {
  let city = input.value;
  showWeather(city);
  input.value = "";

  e.preventDefault();
});

function showWeather(city) {
  const url = `${baseURL}${city}&appid=${myKey}&units=metric&lang=tr`;
  fetch(url)
    .then((response) => response.json())
    .then((response) => {
      if (citiesArr.includes(response.name)) {
        message.innerText = `You already know the weather for ${response.name},Please search for another city`;
        setTimeout(() => {
          message.innerText = "";
        }, 3000);
      } else if (city.lenght === 0) {
        alert("bir sehir seciniz");
      } else if (citiesArr > 3) {
        alert("Please Subscribe for multiple city show");
      } else {
        cities.innerHTML += `<ul class="city">
            <li class="city-name"> ${response.name}<sup>${
          response.sys.country
        }</sup></li>
            <li class="city-temp"> ${Math.round(
              response.main.temp
            )}<sup>${"°C"}</sup></li> 
            <li><img class="city-icon" src="http://openweathermap.org/img/wn/${
              response.weather[0].icon
            }@2x.png" alt="icon"></li>
            <li><figcaption>${response.weather[0].description}<figcaption></li>
            </ul>`;
        citiesArr.push(response.name);
      }
    })
    .catch((err) => {
      message.innerText = `No city with this name found`;
      setTimeout(() => {
        message.innerText = "";
      }, 3000);
    });
}
