class Wall{
    constructor(x,y,width,height){
        var options = {
            isStatic : true,

        }
this.wall=Bodies.rectangle(x,y,width,height,options)
World.add(world,this.wall);


this.width = width;
this.height= height;

this.image = loadImage("dustbingreen.png");
    
}
    display(){
        var pos = this.wall.position;
        fill("red");
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.width,this.height)
    }
}