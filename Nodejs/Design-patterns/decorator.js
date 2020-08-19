class Shape{
}

class Circle extends Shape{
    constructor(radius=0){
        super()
        this.radius=radius
    }

    resize(factor){
      return  this.radius*=factor
    }

    toString()
    {
        return 'A circle of radius '+ this.radius
    }
}
class ColoredShapred extends Shape{
    constructor(shape,color){
            super()
            this.shape=shape
            this.color=color
    
    }

    toString()
    {
        return this.shape.toString() +' has color '+this.color    }
}

let circle = new Circle(5)
let CS =  new ColoredShapred(circle,'red')

console.log(CS.toString())
console.log(CS.shape.resize(2))