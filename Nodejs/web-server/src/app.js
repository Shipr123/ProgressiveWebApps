const path= require('path')
const express = require('express')
const hbs = require('hbs')
const geoCode = require('./Utils/geoCode')
const weatherCode = require('./Utils/weatherCode')
const app = express()

//Defing Paths for View and public folder-
const PublicdirectoryPath = path.join(__dirname,'../public')
const viewPath= path.join(__dirname,'../templates/views')
//Initialising Public folder in express
app.use(express.static(PublicdirectoryPath))

//Setting Handle Bars
app.set('view engine','hbs')
app.set('views',viewPath)

//Setting Partial Handle Bars
const PartialPath = path.join(__dirname,'../templates/partials')
hbs.registerPartials(PartialPath)

// Requests-
app.get('',(req,res)=>{
     res.render('index',{
         title:'Weather App',
         name : 'Shipra Paliwal'
     })
 })

app.get('/help',(req,res)=>{
    res.render('help',{
        title:'HELP PAGE',
        message:'There is some uninterupted error in Website.',
        name :'Shipra Paliwal'
    })
})
 app.get('/About',(req,res)=>{
  res.render('about',{
      title: 'About Me',
      name : 'Shipra Paliwal'
  })
  })
app.get('/Weather',(req,res)=>{
    if(!req.query.address){
        return (res.send ({
            Error: "Address for search not Provided"
        }))
    }
    geoCode(req.query.address,(error,{Latitude, Longitude, Location}={})=>{
        if(error){
            return res.send( {error })
        }
       
         weatherCode(Latitude,Longitude,(error,data)=>{
             if(error){
                 console.log(error)
                 return res.send({error })
                 
             }
            res.send({
                forecast: data ,
                Location: Location ,
                address : req.query.address 
            })

         })
  

    })
    
}) 
app.get('/product',(req,res)=>{
    if(!req.query.search){
        return (res.send({
            Error: "You have not given search product."
        }))
    }
    console.log(req.query.search)
    res.send({
        product :[]
    })
})
app.get('/help/*',(req,res)=>{
    res.render('error',{
        Error:'Help not Found!',
        title: '484 ERROR',
        name: ' Shipra Paliwal'
    })
})
app.get('*',(req,res)=>{
    res.render('error',{
        Error: 'Page Not Found !',
        title: '484 ERROR',
        name: ' Shipra Paliwal'

    })
})
app.listen(3000, ()=>{
    console.log("Server Running On Port 3000.")
})