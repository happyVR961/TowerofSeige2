class Box {
    constructor(x, y, width, height) {
     
      var options = {
        'restitution':0.2,
        'friction':0.2,
        'density':1.2
    }
    this.Visiblity = 255;
    
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    //this.image = loadImage("sprites/base.png");
    World.add(world, this.body);
      }
      
         
          
        display(){
          var angle = this.body.angle;
         
          if(this.body.speed<3){
            fill("brown");
            rectMode(CENTER);
            rect(this.body.position.x, this.body.position.y, this.width, this.height);
          }
          else{
            World.remove(world, this.body);
           push();
            this.Visiblity = this.Visiblity - 5;
            //console.log(tint);
       tint(255,this.Visiblity);
         
       pop();
          }
          
         // pop();
        }
      //   attach(body){
      //     this.sling.bodyA = body;
      // }
  }
        //console.log(this.body.speed);
       
      
    