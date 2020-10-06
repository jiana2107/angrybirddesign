class Pig{
    constructor (x,y){
    var box_options={
        restitution:0.8,
        friction:0.3,
        density:1.0}
  
        this.width=50;
        this.height=50;
     this.body = Bodies.rectangle(x,y,50,50,box_options);
      World.add(myWorld,this.body);
  
    }
     display(){
         var pos=this.body.position;
         var angle=this.body.angle;
         push()
         translate(pos.x,pos.y)
         fill("green")
         rotate(angle)
         rectMode(CENTER);
         rect(0,0,this.width,this.height);
         pop()
     }
  
  
  }