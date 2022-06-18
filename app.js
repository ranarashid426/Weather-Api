const storage = new Storage()
const weatherLocation = storage.getLocationData()
const weather = new Weather(weatherLocation.city,weatherLocation.state)
const ui = new UI()
// weather.changeWeather('Boston','US')

document.addEventListener('DOMContentLoaded',getWeather)

const storageLocation = storage.getLocationData()

document.getElementById('w-change-btn').addEventListener('click',(e)=>{
    const city = document.getElementById('city').value
    const state = document.getElementById('state').value
    
    weather.changeWeather(city,state)
    storage.setLocationData(city,state)

    getWeather()
    $('#locModal').modal('hide')
    console.log('working')
})

// weather.getCoordinates().then(data=>console.log(data)
function getWeather(){
 weather.getCoordinates()
.then(data=>
{
data.forEach(element => {
    let lat= element.lat
    let lon = element.lon
    // console.log(lat,lon)
    weather.getWeather(lat,lon).then(data=>{
        // console.log(data)
        ui.paint(data)
    }
    
    )
    
    
});

})
}

