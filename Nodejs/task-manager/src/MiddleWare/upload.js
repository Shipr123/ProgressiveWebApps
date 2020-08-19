const multer = require('multer')

const avataar = multer({
    
    limits:{
        fileSize: 1000000
    },
    fileFilter(req,file,cb){
        if(!file.originalname.match(/\.(png|jpg|jpeg)$/)){
        cb( new Error('File must be jpg or png'))
        }
        cb(undefined,true)
    }
})

module.exports = avataar