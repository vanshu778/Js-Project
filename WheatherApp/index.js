let cityName = document.querySelector(".weather_city");
let dateTime = document.querySelector(".weather_date_time");
let w_forecast = document.querySelector(".weather_forecast");
let w_icon = document.querySelector(".weather_icon");
let w_temperature = document.querySelector(".weather_temperature");
let w_minTem = document.querySelector(".weather_min");
let w_maxTem = document.querySelector(".weather_max");

const getWeatherData = async() => {
    const weatherUrl =`https://api.openweathermap.org/data/2.5/weather?q=pune&APPID=a5fd05c1f3d9ddfd7ad33293ea7e340e
`;

    try{
        const res = await fetch(weatherUrl);
        const data = await res.json();
        // console.log(data);
        
        const {main, name, weather, wind, sys, dt} = data;
    }catch(error){
        console.log(error);
    }
};

document.body.addEventListener("load",getWeatherData());
