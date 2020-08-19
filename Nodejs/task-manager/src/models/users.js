require('../db/mongoose.js')
const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const Task = require('./tasks')


const UserSchema = new  mongoose.Schema({
    name:{
        type:String,
        required : true,
        trim:true
       
    },
    email:{
        type: String,
        unique:true,
        lowercase:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Email is invalid')
            }
        },
        required:true,
        trim: true
    },
    password:{
       type: String,
       required:true,
       trim : true,
       
       validate(value){
           if(validator.equals(value,"password")){
               throw new Error('Password cant be password.')
           } else if(value.length<7){
               throw new Error('Length small')
           }
       }

    },
    age:{
        type:Number,
        default:0,
        validate(value){
            if(value<0){
                throw new Error('Age can not be negative.')
            }
       
        }
    },
    tokens : [{
        token:{
            type: String,
            required: true
        }
    }],
    avataar :{
        type: Buffer
    }

 },{
     timestamps:true
 })

 UserSchema.virtual('tasks',{
     ref : 'Task',
     localField : '_id',
     foreignField :'owner'
 })
 UserSchema.methods.toJSON =  function (){
     const user = this
     const userObject = user.toObject()

     delete userObject.password
     delete userObject.tokens

     return userObject
 }


 UserSchema.methods.generateAuthToken = async function(){
     const user = this
     const token = jwt.sign({_id : user._id},'thisistoken')
     user.tokens = user.tokens.concat({token})
     await user.save()
     return token
 }
 UserSchema.statics.findByCredentials = async function(email, password){
     const user = await User.findOne({ email })
    
     if(!user){
         throw new Error('Unable to login')
     }
     
     const isMatch = await bcrypt.compare(password, user.password)
     if(!isMatch){
         throw new Error('Unable to login')
     }
     return user
 }


UserSchema.pre('save', async function(next){
    const user = this
    if(user.isModified('password')){
        user.password = await bcrypt.hash(user.password,8)
    }
    next()
})
//Deleteing all tasks if user is deleted
UserSchema.pre('remove', async function(next){
    const user = this
  await Task.deleteMany({owner: user._id})
    next()
})
const User =mongoose.model('Users', UserSchema)
    
 module.exports = User