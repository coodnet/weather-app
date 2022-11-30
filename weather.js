let temp = document.querySelector(".temp");
const api = {
  key: "22b656c41598a0851f1a897b443094df",
  baseurl: "https://api.openweathermap.org/data/3.0/",
};

const searchBox = document.querySelector(".search-box");

searchBox.addEventListener("keypress", (e) => {
  if (e.keyCode == 13) {
    getResult(searchBox.value);
    console.log(searchBox.value);
    searchBox.value = "";
  }
});

function getResult(query) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${
      query || "Tashkent"
    }&units=metric&appid=${api.key}`
  )
    .then((weather) => {
      return weather.json();
    })
    .then(displayResults)
    .catch(() => {
      temp.textContent = "Sorry ! Not Found";
    });
  temp.textContent = "Loading...";
}
getResult();

function displayResults(weather) {
  console.log(weather);

  let city = document.querySelector(".city");
  city.textContent = `${weather.name} , ${weather.sys.country}`;

  temp.textContent = `${Math.round(weather.main.temp)}°C`;

  let weatherType = document.querySelector(".weather");
  weatherType.textContent = `${weather.weather[0].description}`;

  let highLow = document.querySelector(".high-low");
  highLow.textContent = `Wind speed : ${weather.wind.speed} m/s`;
}

let date = document.querySelector(".date");

let weeks = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
let monthS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "Septemer",
  "October",
  "November",
  "December",
];

let days = new Date();
let day = days.getDay()
let year = days.getFullYear();
let week = days.getDay();
let month = days.getMonth();

date.textContent = ` ${weeks[week - 1]} ${day} - ${monthS[month-1]} , ${year}`;
