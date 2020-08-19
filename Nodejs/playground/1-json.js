const fs =  require('fs')

//const  book = {
 //title:"Life Beyond",
// author:"shipra Paliwal"
//}

//const bookJson= JSON.stringify(book)
//fs.writeFileSync('1-json.json',bookJson)

const data = fs.readFileSync('1-json.json')
const dataParse = JSON.parse(data)

dataParse.name="Parth"
dataParse.age="24"

const newData = JSON.stringify(dataParse)
fs.writeFileSync('1-json.json',newData)

//console.log(bookPar.title)