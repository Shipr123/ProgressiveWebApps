const add = (a,b)=>{
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
    resolve(a+b)
    },2000)
    })
}

add(1,1).then((result)=>{
    console.log(result)
    return add(result,3)
}).then((result2)=>{
    console.log(result2)
}).catch((e)=>{
    console.log(e)
})

