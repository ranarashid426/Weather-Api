class UI{
    constructor(){
        this.location = document.getElementById('w-location')
        this.desc = document.getElementById('w-desc')
        this.string = document.getElementById('w-string')
        this.details = document.getElementById('w-details')
        this.icon = document.getElementById('w-icon')
        this.humidity = document.getElementById('w-humidity')
        this.feelsLike = document.getElementById('w-feels-like')
        // this.dewpoint = document.getElementById('w-dewpoint')
        this.wind = document.getElementById('w-wind')
        
     
    }
    paint(weather){
        this.location.textContent = `${weather.name},${weather.sys.country}`
        weather.weather.forEach(element => {
            this.desc.textContent = element.description
        });
        this.string.textContent = `Temperature: ${weather.main.temp}`
        this.icon.setAttribute('src', weather.weather.icon)
        this.humidity.textContent = `Humidity: ${weather.main.humidity}%`
        this.feelsLike.textContent = `FeelsLike: ${weather.main.feels_like}`
        // this.dewpoint.textContent = weather.main.temp
        this.wind.textContent = `Wind Speed: ${weather.wind.speed}`
        

       
        

    }
}
