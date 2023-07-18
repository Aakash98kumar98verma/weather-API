const API_KEY = `a2def94bf6b33a13f011fab7cabd1f6c`

const form = document.querySelector("form")
const search = document.querySelector("#search")
const weather = document.querySelector("#weather")

// const IMG_URL = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`

const getWeather = async (city) => {
    weather.innerHTML=`<h2> Loding...! </h2>`
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    const response = await fetch(url);
    const data = await response.json()
    return showWeather(data);
}

const showWeather = (data) =>{
    console.log(data) //to show data of weather api city in console.
    if(data.cod=="404"){
        weather.innerHTML=`<h2> City Not Found ! </h2>`
        return;
    }
    weather.innerHTML= `
    <div id="img">
        <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="weather">
    </div>
    <div id="details">
        <h4>${data.name}, ${data.sys.country}</h4>
        <h2>${data.main.temp} ℃</h2>
        <h5>${data.weather[0].main}</h5>
    </div>`
}

form.addEventListener(
    "submit",
    function (event) {
        getWeather(search.value)
        event.preventDefault();
    }
)