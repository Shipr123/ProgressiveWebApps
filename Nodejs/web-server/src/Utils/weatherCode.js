const request = require('request')

const weatherCode = (latitude,longitude,callback )=>{
    
    const url = 'http://api.weatherstack.com/current?access_key=76a21d3fec3085d57f9a01daf77d3305&query='+ encodeURIComponent(latitude)+','+ encodeURIComponent(longitude)+'&units=f'
    request({url, json:true},(error,{body})=>{
    
    const {current,error:ERROR}=body
    if(error){
        callback(error,undefined)
    } else if(ERROR){
        callback("No Location Found",undefined)
    } else{
     callback(undefined,'It is currently '+ current['temperature']+' farehnite out.But it feels like '+
     current['feelslike']+'farehnite out there.')
    }
    })
 }

 module.exports = weatherCode
 