class VectorRender{

    DrawCircle(radius){
        console.log('Drawing circle of '+ radius)
    }
}

class RasterRender{
    DrawCircle(radius){
    console.log('Drawing Raster  circle of '+ radius)
    }
}



class Shape {
    constructor(render){
        this.render=render
    }

}
class circle extends Shape
{
 constructor(render,radius){
     super(render)
     this.radius=radius
 }
draw( ){
     this.render.DrawCircle(this.radius)
}
}

let vector = new VectorRender()
let raster = new RasterRender()

let Circle = new circle(vector,5)
Circle.draw()