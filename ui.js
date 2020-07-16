class UI{
    constructor(){
        this.location =document.getElementById('w-location');
        this.desc =document.getElementById('w-desc');
        this.string =document.getElementById('w-string');
        this.details =document.getElementById('w-details');
        this.icon =document.getElementById('w-icon');
        this.humidity =document.getElementById('w-humidity');
        this.feelsLike =document.getElementById('w-feels-like');
        this.dewpoint =document.getElementById('w-dewpoint');
        this.wind =document.getElementById('w-wind');
    }
    paint(weather)
    { 
        const celcius = ((weather.main.temp)-32)*5/9;
        this.location.textContent = weather.name;
        this.desc.textContent = weather.weather[0].description;
        this.string.innerHTML = `${weather.main.temp}°<span>F</span> (${celcius.toFixed(1)}°<span>C</span>)`;
        this.icon.setAttribute('src','icons/'+weather.weather[0].icon+'.png');
        this.humidity.textContent = `Relative Humidity: ${weather.main.humidity}`;
        this.dewpoint.textContent = `Pressure: ${weather.main.pressure}hPa`
        this.feelsLike.innerHTML = `Feels Like: ${weather.main.feels_like}°<span>F</span> (${(((weather.main.feels_like)-32)*5/9).toFixed(1)}°<span>C</span>)`;
        this.wind.textContent = `wind Speed:${weather.wind.speed}MPH`
    }
}