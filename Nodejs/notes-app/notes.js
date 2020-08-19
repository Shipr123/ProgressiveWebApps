const fs= require('fs')
const chalk = require('chalk')

//Add Notes function
const addNotes =(title,body)=>{
 const notes= loadNotes()


 const duplicateNote = notes.find((note)=>{
     return note.title===title
 })
 if(!duplicateNote){
 notes.push({
    title:title,
    body:body
 })
  SaveNotes(notes)
  console.log(chalk.red.inverse('Note Added!'))
} else {

    console.log(chalk.green.inverse("Title already taken!"))
}

}

// Save Notes function-

const SaveNotes = (notes)=>{

    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)

}
// LOAD Notes function-
const loadNotes = ()=>{
 try{
    const dataBuffer = fs.readFileSync('notes.json')
    const data= dataBuffer.toString()
    return JSON.parse(data)
 } catch(e)
 {   
    return []
 }
}

// REMOVE Notes function
const RemoveNotes= (title)=>{
 const notes = loadNotes()
 const NewNotes = notes.filter((note)=>{
    
    return (note.title != title)
 })
 if(NewNotes.length===notes.length){
 console.log(chalk.green.inverse('Note not found!'))
 } else{
 console.log(chalk.red.inverse("Note Removed!"))
 SaveNotes(NewNotes)
 }
 
}
//LIST NOTES function-

const ListNotes=()=>{
    const Notes = loadNotes()
    console.log(chalk.red('Your Notes-'))
    Notes.forEach(note => {
        console.log(note.title)      
    });
}

//READ NOTE function-
const ReadNote= (title)=>{
 const notes = loadNotes()
 const FindNote= notes.find((note)=> note.title===title)
 if(!FindNote){
     console.log(chalk.red("No Note Found"))
 } else {
     console.log((chalk.green(FindNote.title)),FindNote.body)
 }


}

module.exports= {
  
    addNotes: addNotes,
    RemoveNotes: RemoveNotes,
    ListNotes : ListNotes,
    ReadNote : ReadNote

}