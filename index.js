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

updateTime();
setInterval(updateTime, 1000);
