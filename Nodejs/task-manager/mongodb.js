
 const {MongoClient, ObjectID} =require('mongodb')

 const connectionURL= 'mongodb://127.0.0.1:27017'
 const databaseName= 'task-manager'

//  const id= new ObjectID()
//  console.log(id)
//  console.log(id.getTimestamp())

 MongoClient.connect(connectionURL, {
     useNewUrlParser:true},(error,client)=>{

        if(error){
        return console.log('Error')
        }

       const db = client.db(databaseName)
    //   db.collection('Tasks').findOne({
    //     _id: new ObjectID("5f1fa9ec7df19322881e8443")
    //   },(error, response)=>{
    //    if(error)
    //    return console.log("Error Occured")

    //    console.log(response)
    //   })
    //  })


//     db.collection('user').insertMany([
//         {  name:'Parth',
//         age:22

//     },
//     {
//         name:'Shashank',
//         age:23
//     }

//   ],(error,result)=>{

//   if(error){
//     return console.log('Error')
//  }


//   console.log(result.ops)

//     })

// db.collection('Tasks').insertMany([
//     { description:'To Delete Array',
//       completed:false
//     },
//     {
//         description:'To Insert Array',
//         completed:true
//     }
// ],(error, result)=>{
//     if(error){
//         return console.log('Error Occured')
//     }
//  console.log(result.ops)
// })

//UPDATE-

//1.   db.collection('user').updateOne({
//     _id: new ObjectID("5f1fae498bcf072e001c2df9")
//     },{
//     $set:{
//     name: 'Shruti'
//     }
// }).then((result)=>{
//   console.log(result)
// }).catch((error)=>{
//   console.log(error)
// })

// DELETE-

db.collection('user').deleteMany({
  age:23
}).then((result)=>{
  console.log('ALl okay')
}).catch((error)=>{
  console.log("Error Occured")
})

 })