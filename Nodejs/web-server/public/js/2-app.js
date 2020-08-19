
// fetch('http://localhost:3000/weather?address=!ss').then((response)=>{
    
//    response.json().then((data) => {
//     if(data.error===undefined){
//         console.log(data.error)
//     } else{

//         console.log(data.Location)
//         console.log(data.forecast)
//     }
    
//    })
// })

  const Weatherform = document.querySelector('form')
 const search = document.querySelector('input')
  const messageOne = document.querySelector('#message-1')
 const messageTwo= document.querySelector('#message-2')
 

 messageOne.textContent= 'Loading....'
 messageTwo.textContent= ''

 Weatherform.addEventListener('submit',(event)=>{
    const Location = search.value
    event.preventDefault()
    

   
     fetch('http://localhost:3000/weather?address='+Location).then((response) =>{
    
     response.json().then((data) => {
       // console.log(JSON.stringify(data))
     if(data.Error){
        messageOne.textContent='Location Not Found'
        messageTwo.textContent='data.error'
     } else{
        messageOne.textContent=data.forecast
        messageTwo.textContent=data.Location
     }
    
    })
     })
})







