class Box{
  constructor (x,y,w,h){
  var box_options={
      restitution:0.8,
      friction:1.0,
      density:1.0}

      this.width=w;
      this.height=h;
   this.body = Bodies.rectangle(x,y,w,h,box_options);
    World.add(myWorld,this.body);

  }
   display(){
       var pos=this.body.position;
       var angle=this.body.angle;
       push()
       translate(pos.x,pos.y)
       strokeWeight(4)
       stroke("green")
       fill("white")
       rotate(angle)
       rectMode(CENTER);
       rect(0,0,this.width,this.height);
       pop()
   }


}