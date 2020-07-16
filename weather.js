class Weather{
    constructor(city,state){
        this.apikey = 'd95a41855f11540b4e008096cff4fe30';
        this.city = city;
        this.state = state;
    }

    // fetch api
    async getweather(){
        const response = await fetch
        (`https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.state}&appid=${this.apikey}`);
        const responseData = await response.json();

        return responseData
    }
    changeLocation(city,state){
        this.city = city;
        this.state = state;
    }
}