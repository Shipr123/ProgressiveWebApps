const mongoose= require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api',{
useNewUrlParser:true,
useCreateIndex: true,
useFindAndModify: false

})


// const User = mongoose.model('Users',{
//     name:{
//         type:String,
//         required : true,
//         trim:true
       
//     },
//     email:{
//         type: String,
//         lowercase:true,
//         validate(value){
//             if(!validator.isEmail(value)){
//                 throw new Error('Email is invalid')
//             }
//         },
//         required:true,
//         trim: true
//     },
//     password:{
//        type: String,
//        required:true,
//        trim : true,
       
//        validate(value){
//            if(validator.equals(value,"password")){
//                throw new Error('Password cant be password.')
//            } else if(value.length<7){
//                throw new Error('Length small')
//            }
//        }

//     },
//     age:{
//         type:Number,
//         default:0,
//         validate(value){
//             if(value<0){
//                 throw new Error('Age can not be negative.')
//             }
//         }
//     }
// })

// const me = new User({
//     name:"   Shashank   ",
//     email:"SHASHANK@gmail.com",
//     password:"shipr"
    
// })

// me.save().then((me)=>{
//     console.log(me)
// }).catch((error)=>{
//     console.log(error)
// })

// TASK CRUD------------
// const Tasks = mongoose.model('Tasks',{
//     description:{
//         type: String,
//         required:true,
//         trim:true
//     },
   
//     completed:{
//         default: false,
//         type:Boolean
//     }
// })

// const task = new Tasks({
//     description:"        Delete a file         "
    

// })

// task.save().then((task)=>{
//     console.log(task)
// }).catch((error)=>{
//     console.log(error)
// })
