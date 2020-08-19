const request = require('request')

const geoCode = (address,callback)=>{
    const url='http://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent(address)+'.json?access_token=pk.eyJ1Ijoic2hpcHJhcGFsaXdhbDMzIiwiYSI6ImNrY3puODEwNTBpM3oyc3Zwa24xeW10OXAifQ.eiPd-kb-2cAjek2mNMFmJQ&limit=1'
      
     request({url , json: true},(error,{body})=>{
         
         const { features}=body
         
         if(error){
          callback(error,undefined)
         } else if(body.message === "Not Found"){
          callback("No Location found",undefined)
         } else{  
          callback(undefined,{
    
          Latitude : features[0].center[1],
          Longitude: features[0].center[0],
          Location : features[0].place_name
    
          })
        }   
     })
    }
    

    module.exports = geoCode