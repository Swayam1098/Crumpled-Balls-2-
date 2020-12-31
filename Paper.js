class Paper{

    constructor(x,y,radius){
        var options = {
            restitution:0.3,
            density:0.5,
            friction:0.5
        }
this.body = Bodies.circle(x,y,radius,options)
this.radius=radius

this.image = loadImage("crumpledpaper.png");


World.add(world,this.body)
    }
display(){
    var angle=this.body.angle
    var pos= this.body.position
    push();
    translate(pos.x,pos.y)
    rotate(angle)
    imageMode(CENTER)
    image(this.image,0,0,this.radius,this.radius)
    
    pop();
}



}
