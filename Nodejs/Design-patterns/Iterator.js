class Stuff {

    constructor(){
        this.a=11
        this.b=22
    }

    [Symbol.iterator](){
     let i=0
     let self=this
        return {next : function(){
            return {done : i >1 ,
                value : self[i++ === 0? 'b': 'a']
            }
        }}

    }

    // get backwardValue(){
    //     let i=0
    //     let self=this
    //        return {next : function(){
    //            return {done : i >1 ,
    //                value : self[i++ === 0? 'b': 'a']
    //            }
    //        },[Symbol.iterator ]: function()
    //        {return this} }
   
    //    }
}
let i = new Stuff()
for(let stuff of i){
    console.log(stuff)
}