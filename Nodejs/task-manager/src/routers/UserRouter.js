require('../db/mongoose.js')
const User = require('../models/users')
const Auth = require('../MiddleWare/auth')
const express = require('express')
const router = express.Router()
const Avataar = require('../MiddleWare/upload')

router.post('/users', async (req,res)=>{

    const user = new User(req.body)
    try{
     const token = await user.generateAuthToken()
     await user.save()
     res.status(201).send({user,token})
    }catch(e){
        res.status(400).send(e)
    }
})
router.post('/users/login', async (req, res)=>{
    try{
    const user = await User.findByCredentials(req.body.email, req.body.password);
    const token = await user.generateAuthToken()
    console.log(user)
    res.send({user,token})

    }catch(e){
        console.log(e)
        res.status(400).send(e)

    }
})
router.post('/users/logout',Auth,  async (req,res)=>{
   try{
    req.user.tokens = req.user.tokens.filter((token)=>{
        return token.token !== req.token})
        await req.user.save()
        res.status(200).send()
    }catch(e){
        res.status(500).send()
    }

})
router.post('/users/logoutAll', Auth , async (req,res)=>{
    try{
        req.user.tokens = []
        await req.user.save()
        res.status(200).send()

    }catch(e){
        res.status(500).send(e)
    }
})
//Uploading profile picture
router.post('/user/me/avataar',Auth, Avataar.single('avtaar'), async (req,res)=>{
    try{
        req.user.avataar = req.file.buffer
        await req.user.save()
        res.send(req.user)
    }catch(e){
        res.status(500).send(e)
    }
//For Middleware Error
},(error,req,res,next)=>{
 res.status(400).send({error:error.message})
})

//Deleting Profile Picture

router.delete('/user/me/avataar',Auth, async(req,res)=>{
    try{
        req.user.avataar = undefined
        await req.user.save()
        res.send()
    }catch(e){
        res.status(400).send(e)
    }
})
//Showing picture at client side
router.get('/user/:id/avataar', async(req,res)=>{
    try{
        const user = await User.findById(req.params.id)
        if(!user || !user.avataar){
            throw new Error()
        }
        res.set('Content-Type','image/jpg')
        res.send(user.avataar)
    }catch(e){
        res.status(404).send(e)
    }

})
router.get('/users/me', Auth , async (req,res)=>{
  res.send(req.user)
})



router.patch('/users/me', Auth , async (req,res)=>{
    const Updates = Object.keys(req.body)
    //   const allowUpdates = [ 'description','completed']
    //   const valid = Updates.every((update)=>  allowUpdates.includes(update))
    //   if(!valid){
    //       return res.status(400).send({error: 'Update element not there'})
    //   }
    
     try{
         

         //const user = await User.findByIdAndUpdate(req.params.id, req.body,{ new:true , runValidators:true})
         
         Updates.forEach(update=>req.user[update]= req.body[update] );
         await req.user.save()
         res.send(user)

     }catch(e){
         console.log(e)
         res.status(400).send(e)
     }
    })

    router.delete('/users/me', Auth , async (req,res)=>{
        try{
           await req.user.remove()
            res.send(req.user)
        }catch(e){
            res.status(400).send(e)
        }
    })

    module.exports = router