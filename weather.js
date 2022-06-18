class Weather{
    constructor(city,state){
        this.apiKey = '47f4834a3bf875520319547109830d6a'
        this.city = city
        this.state = state
        // this.country = country

    }
    async getCoordinates(){
        const coordResponse = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${this.city},${this.state}&appid=${this.apiKey}`)
        const coordData = await coordResponse.json()
        return coordData
    
    }
     



    async getWeather(lat,lon){
        const weatherResponse =  await fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${this.apiKey}`) 
        const weatherData= await weatherResponse.json()
        return weatherData
        }
    // Change weather location
    changeWeather(city,state){
        this.city = city
        this.state = state

    }
}