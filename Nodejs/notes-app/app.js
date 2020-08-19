//const validator=require('validator')
const Notes = require('./notes.js')
const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')

//console.log(chalk.red.inverse.bold('Sucess')
yargs.version('1.1.0')
yargs.command({
 command : 'add',
 describe : 'Adding a note',
 builder:{
     title:{
      describe:'This is a title',
      demandOption: false,
      type:'string'
     
     } ,

     body:{
      describe:'This is a body',
      demandOption:true,
      type:'string'

     }

 },
 handler: (argv)=>{
     Notes.addNotes(argv.title,argv.body)
 }

})

yargs.command({
    command : 'remove',
    describe : 'Removing a note',
    builder :{
        title :{
            describe:'This is title',
            demandOption:true,
            type: 'string'
        }
    },
    handler: (argv)=>{
        notes.RemoveNotes(argv.title)
            
       
    }
   
   })

   yargs.command({
    command : 'list',
    describe : 'List of notes',
    handler:(argv)=>{
       notes.ListNotes(argv)
    }
   
   })

   yargs.command({
    command : 'read',
    describe : 'Reading a note',
    builder:{
        title:{
            describe:"this is title",
            demandOption:true,
            type:'string'
        }
    },
    handler: (argv)=> {
        Notes.ReadNote(argv.title)
    }
   
   })
   yargs.parse()
   
   
   
