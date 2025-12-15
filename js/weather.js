
async function currentWeather() {
  try {
    const response = await fetch(
      "https://api.weatherapi.com/v1/forecast.json?key=d56851a9495940b3b88162600250312&q=donostia&days=1&aqi=no"
    );

    const data = await response.json();

    // Datos del tiempo actual
    const city      = data.location.name;
    const region    = data.location.region;
    const condition = data.current.condition.text;
    const temp      = data.current.temp_c;
    const icon      = data.current.condition.icon;
    const wind      = data.current.wind_kph;
    const rain      = data.current.precip_in;
    const humidity  = data.current.humidity;

    document.getElementById("current-weather").innerHTML =
    `
    <h2>${city} / ${region}</h2>
    <p>${condition}</p>
    <div class='current-data'>
      <div class='current-grades'>
        <img class='weather-icon' src='https:${icon}' alt='icon'>
        <div>${temp} <img src='/assets/termometro.png' alt='term icon'></div>
        <ul>
          <li>Viento: ${wind} Km/h</li>
          <li>Precipitaciones: ${rain}%</li>
          <li>Humedad: ${humidity}%</li>
        </ul>
      </div>
    </div>
    `

    // Datos del pronóstico

    const hours = data.forecast.forecastday[0].hour;
    let html=''

    hours.forEach(h => {
     const time = h.time.split(" ")[1];
     const temp = h.temp_c;
     const icon = "https:" + h.condition.icon;

     html +=`
        <li class='forecast-grades'>
          ${time}
          <img src='${icon}'>
          ${temp}
        </li>
        `;

      });
      
      document.getElementById("forecast-weather").innerHTML = html

  } catch (error) {
     console.error("Error al obtener los datos:", error);
  }
}

currentWeather();
setInterval(currentWeather, 2000000)