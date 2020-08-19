const geoCode = require('./utils/geoCode')
const weatherCode = require('./Utils/weatherCode')

const address = process.argv[2]

if(!address){
    console.log("Please provide address!")
} else {
    geoCode(address,(error, { Latitude, Longitude,Location}={})=>{

    if(error){
        return console.log(error)
    }

    weatherCode(Latitude,Longitude,(error,weatherData)=>{
        if(error){
        return console.log(error)
        }

       console.log(weatherData)
       console.log(Location)
   })
 })
}











