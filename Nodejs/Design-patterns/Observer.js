class Events {
    constructor(){
        this.handler = new Map();
        this.count =0
    }
    subscribe(handler){
        this.handler.set(++this.count,handler)
        return this.count
    }
    unsubscribe(idx){
        this.handler.delete(idx)
    }
    fire(sender,args){
        this.handler.forEach((v,k)=> v(sender,args))
    }
}

class FallIllArgs{
    constructor(address){
        this.address=address

    }
}

class Person{
    constructor(address){
        this.address=address
        this.fallsIll = new Events()

    }
    catchCold(){
        this.fallsIll.fire(this,
            new FallIllArgs(this.address))
    }
}

let person = new Person('123 London Road')
let sub = person.fallsIll.subscribe((s,a)=>{
    console.log('A doctor has been called to '+ a.address)
})
person.catchCold()
person.catchCold()
person.fallsIll.unsubscribe(sub)
person.catchCold()