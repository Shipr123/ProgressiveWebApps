const http= require('http')

const url='http://api.weatherstack.com/current?access_key=76a21d3fec3085d57f9a01daf77d3305&query=48,-75&units=f'

const request = http.request(url,(response)=>{
    let data=' '
    response.on('data',(chunk)=>{
      data =data+ chunk.toString()
    })
    response.on('end',()=>{
        const body = JSON.parse(data)
        console.log(body)

    })
})

request.on('error',(error)=>{
    console.log("An unindntified error",error)
})

request.end()