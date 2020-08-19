class ChiefExecutiveOfficer{
 get name(){
    return ChiefExecutiveOfficer._name
 }
  set name(value){
    return  ChiefExecutiveOfficer._name=value
  }
  get age(){
     return ChiefExecutiveOfficer._age
  }

  set age(value){
     return ChiefExecutiveOfficer._age=value
  }

  toString(){
     return 'Ceo name '+ this.name + 'Age is '+this.age
  }
}

ChiefExecutiveOfficer._age= undefined
ChiefExecutiveOfficer._name= undefined

const ceo1 = new ChiefExecutiveOfficer()
ceo1.name = 'Shipra'
ceo1.age= 22

const ceo2 = new ChiefExecutiveOfficer()
ceo2.name = 'Parth'
ceo2.age= 23

console.log(ceo1.toString())

console.log(ceo2.toString())















// class Singleton {
//    constructor(){
//    const instance = this.constructor.instance
//     if(instance){
//        return instance
//     }
//      this.constructor.instance=this
//     }


// }
// let s1= new Singleton()
// let s2 = new Singleton()
// console.log(s1===s2)