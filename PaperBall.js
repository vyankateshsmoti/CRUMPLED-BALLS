class PaperBall{
     constructor(x,y){
         var options = {
             isStatic : false,
             density : 4,
             friction :0.3,
             restitution : 0.1
         }
         this.body = Bodies.rectangle(x,y,50,50,options);
         this.width = 50;
         this.height = 50;
         this.image = loadImage("paper.png");
         World.add(world,this.body);
     }
    display(){
     var pos = this.body.position;
     var angle = this.body.angle;
     push();
     translate(pos.x,pos.y);
     rotate(angle);
     imageMode(CENTER);
     image(this.image,0,0,this.width,this.height);
     pop();


    }
}