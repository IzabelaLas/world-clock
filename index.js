function updateTime() {
  let warsawElement = document.querySelector("#warsaw");
  let warsawDateElement = warsawElement.querySelector(".date");
  let warsawTimeElement = warsawElement.querySelector(".time");
  let warsawTime = moment().tz("Europe/Warsaw");

  warsawDateElement.innerHTML = moment().format("dddd, MMMM Do YYYY");
  warsawTimeElement.innerHTML = warsawTime.format("LTS");

  let dubaiElement = document.querySelector("#dubai");
  let dubaiDateElement = dubaiElement.querySelector(".date");
  let dubaiTimeElement = dubaiElement.querySelector(".time");
  let dubaiTime = moment().tz("Asia/Dubai");

  dubaiDateElement.innerHTML = moment().format("dddd, MMMM Do YYYY");
  dubaiTimeElement.innerHTML = dubaiTime.format("LTS");
}

function currentLocationTime() {
  let currentElement = document.querySelector("#current");
  let currentName = moment.tz.guess();
  let currentCityName = currentName.replace("_", " ").split("/")[1];
  let currentTimeElement = moment().tz(moment.tz.guess());
  currentElement.innerHTML = ` <div class="currentDisplay" id="current">
         <div class="CityAndDate">
           <h2 class="city">${currentCityName}</h2>
           <div class="date">
             ${currentTimeElement.format("dddd, MMMM Do YYYY")}
           </div>
         </div>
         <div class="time">${currentTimeElement.format("LTS")}</div>
       </div>`;
}

function currentLocation() {
  currentLocationTime();
  setInterval(currentLocationTime, 1000);
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  let cityTime = moment().tz(cityTimeZone);
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let changeTheCity = document.querySelector("#firstCity");
  changeTheCity.innerHTML = `  
  <div class="citiesExamples">
    <div class="CityAndDate">
    <h2 class="city">${cityName} ✈️</h2>
        <div class="date">${cityTime.format("dddd, MMMM Do YYYY")}</div>
    </div>
    <div class="time">${cityTime.format("LTS")}</div>
    </div>`;
}

updateTime();
setInterval(updateTime, 1000);

let cityChange = document.querySelector("#citySelect");
cityChange.addEventListener("change", updateCity);

currentLocation();
