class Bird{
    constructor (x,y){
    var box_options={
        restitution:0.5,
        friction:1.0,
        density:1.5}
  
        this.width=50;
        this.height=50;
     this.body = Bodies.rectangle(x,y,50,50,box_options);
      World.add(myWorld,this.body);
  
    }
     display(){
         var pos=this.body.position;
         var angle=this.body.angle;
         pos.x=mouseX;
         pos.y=mouseY;
         push()
         translate(pos.x,pos.y)
         strokeWeight(4)
         stroke("blue")
         fill("red")
         rotate(angle)
         rectMode(CENTER);
         rect(0,0,this.width,this.height);
         pop()
     }
  
  
  }