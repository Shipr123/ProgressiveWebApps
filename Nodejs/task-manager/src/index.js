require('./db/mongoose')
const express = require('express')

const UserRouter = require('./routers/UserRouter')
const TaskRouter = require('./routers/taskRouter')

const app= express()



//For heroku to deploy app-
const port = process.env.PORT || 3000
// app.use((req,res,next)=>{
    
//         res.status(505).send('505  ALL SERVICES ARE DISABLED ')
    
// })

app.use(express.json())
app.use(UserRouter)
app.use(TaskRouter)

// const jwt = require('jsonwebtoken')
// const myFunction = async ()=>{
//     const token =  jwt.sign({_id:'abcd1234'},'thisisnewtoken',{expiresIn:'10 seconds'})
//     console.log(token)
//     const verify = jwt.verify(token,'thisisnewtoken')
//     console.log(verify)
// }
const multer = require('multer')

const upload = multer({
    dest : 'images',
    limits:{
        fileSize: 1000000
    },
    fileFilter(req,file,cb){
        if(!file.originalname.match(/\.(doc|docx)$/)){
            cb( new Error('File must be Word Document.'))
        }
        cb(undefined,true)
    }
})
app.post('/upload', upload.single('upload'),(req,res)=>{
    res.send()
},(error,req,res,next)=>{
    res.status(400).send({error:error.message})
})

app.listen(port,()=>{
    console.log('Server is running on '+ port)
})
