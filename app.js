const storage = new Storage();
console.log(storage);
const weatherLocation = storage.getLocationData();
console.log(weatherLocation);
const weather = new Weather(weatherLocation.city,weatherLocation.state);

const ui = new UI;

document.addEventListener('DOMContentLoaded',getWeather);

document.getElementById('w-change-btn').addEventListener('click',(e)=>{
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;

    weather.changeLocation(city,state);

    storage.setLocationData(city,state);

    getWeather();

    $('#locModal').modal('hide');
})

function getWeather()
{
    weather.getweather()
    .then((results) =>{
        ui.paint(results);
    })
    .catch(err => console.log(err));
}
