class Snow{
    constructor (x,y){
       var options={
           restitution:0.4,
   
    }
   this.body=Bodies.circle(x,y,40,options);
   this.radius = 40;
   this.image=loadImage("snow4.webp");
   World.add(world,this.body);
    }
    display() {
   
       var pos = this.body.position;
       var angle = this.body.angle;
   
       push();
       translate(pos.x, pos.y);
       rotate(angle);
       noStroke();
       imageMode(CENTER);
       image(this.image,0,0,this.radius,this.radius);
       pop();
   }
}