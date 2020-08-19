require('../src/db/mongoose')
const Task = require('../src/models/tasks')

//5f2246fc85328f3314895827



const TaskDeleteAndCount = async(id,complete)=>{
    const del =  await Task.findByIdAndDelete({id})

    const count =  await Task.countDocuments({completed : complete})
    return count
}
TaskDeleteAndCount('5f1fa9ec7df19322881e8',false).then((count)=>{
    console.log(count) 
}).catch((e)=>{
    console.log('Not right')
})

