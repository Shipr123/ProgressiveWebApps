// Class  of which object is created

class Person{
    constructor(){
        this.streetAddress=" "
        this.Area=" "
        this.job=" "
    }
    tostring(){
        return ('Person lives at  '+this.streetAddress +'D  '+this.Area +'. Job is '+this.job)
    }
}

//Base Builder
class PersonBuilder{
    constructor(person = new Person()){
        this.person= person
    }

 get lives(){
     return new PersonAddressBuilder(this.person)
 }
 get Work(){
     return new PersonWorkBuilder(this.person)
 }

 build(){
     return this.person
 }
}

class PersonAddressBuilder extends PersonBuilder{
    constructor(person){
        super(person)
    }
    at(streetAddress){
        this.person.streetAddress =  streetAddress
        return this
    }
    atA(area){
        this.person.Area=area
        return this
    }
}

class PersonWorkBuilder extends PersonBuilder{
    constructor(person){
        super(person)
    }

    asA(job){
        this.person.job=job
        return this

    }
}
 let person = new PersonBuilder()
 let pb = person.lives.at('1234').atA('kamla Nagar').Work.asA('Engineer').build()

console.log(pb.tostring())