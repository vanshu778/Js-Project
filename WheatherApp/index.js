let cityName = document.querySelector(".weather_city");
let dateTime = document.querySelector(".weather_date_time");
let w_forecast = document.querySelector(".weather_forecast");
let w_icon = document.querySelector(".weather_icon");
let w_temperature = document.querySelector(".weather_temperature");
let w_minTem = document.querySelector(".weather_min");
let w_maxTem = document.querySelector(".weather_max");


// to get the actual country name
const getCountryName = (code) => {
    return new Intl.DisplayNames([code], { type: "region" }).of(code);
  };

// to get the date and time
const getDateTime = (dt) => {
    const curDate = new Date(dt * 1000); // Convert seconds to milliseconds
    console.log(curDate);
    // // const date = new Date();
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    };
  
    const formatter = new Intl.DateTimeFormat("en-US", options);
    console.log(formatter);
    return formatter.format(curDate);
  };
  
const getWeatherData = async() => {
    const weatherUrl =`https://api.openweathermap.org/data/2.5/weather?q=pune&APPID=a5fd05c1f3d9ddfd7ad33293ea7e340e
`;

    try{
        const res = await fetch(weatherUrl);
        const data = await res.json();
        // console.log(data);
        
        const {main, name, weather, wind, sys, dt} = data;

        cityName.innerHTML = `${name}, ${getCountryName(sys.country)}`;
        dateTime.innerHTML = getDateTime(dt);

        w_temperature.innerHTML = `${main.temp}&#176`;
        w_minTem.innerHTML = `Min: ${main.temp_min.toFixed()}&#176`;
        w_maxTem.innerHTML = `Max: ${main.temp_max.toFixed()}&#176`;

        
    }catch(error){
        console.log(error);
    }
};

document.body.addEventListener("load",getWeatherData());
