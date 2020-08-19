const jwt = require('jsonwebtoken')
const User = require('../models/users')


const Auth = async (req,res,next)=>{
   try{
    const token = req.header('Authorization').replace('Bearer ', '')
    
    const decode = jwt.verify(token,'thisistoken')
    
    const user =  await User.findOne({ _id: decode._id, 'tokens.token': token})

    if(!user){
        throw new Error()
    }
    
    req.token = token
    req.user = user
    next()
   }catch(e){
       console.log(e)
       res.status(400).send({error:'Please Authenticate'})
   }
}

module.exports = Auth