//Complete the Weather API Backend part using openweathermap api

// Progression 1: Create a function and fetch data using "fetch" from openweathermap api and display the data as given in reference image.

async function getDataWeatherApp(input) {
  try {
    let x = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=d6c94e717e8effa7a2f879cd68b9c520`
    );
    Display(x.data);
    console.log(x);
  } catch (error) {
    console.log('error', error);
  }
}

document.getElementById('input').addEventListener('input', getInputHtml);

function getInputHtml() {
  let inputValue = document.getElementById('input').value;

  getDataWeatherApp(inputValue);
}

function Display(dataObject) {
  let infoContainer = document.querySelector('.info');

  console.log(dataObject);
  let ActualTemp = Math.floor(dataObject.main.temp - 273.15);
  let MaxTemp = Math.floor(dataObject.main.temp_max - 273.15);
  let MinTemp = Math.floor(dataObject.main.temp_min - 273.15);
  let CityName = dataObject.name;

  const daysOfWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const dayOfWeek = daysOfWeek[new Date().getDay()];
  //   console.log(dayOfWeek);
  let DateTodayDD = new Date().toLocaleDateString();

  console.log(DateTodayDD);
  infoContainer.innerHTML = '';
  infoContainer.innerHTML += `<div id="city">${CityName}</div>
    <div id="date-day-tag" class="DDMMYY">${dayOfWeek} ${DateTodayDD}</div>
    <div class="temp">${ActualTemp}<span>'C</span></div>
    <div id="MinMax"><span id="Min">${MinTemp}'C</span> / <span>${MaxTemp}'C</span></div>`;
}

