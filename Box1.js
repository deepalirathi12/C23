class Box1 {
    constructor() {
      var options = {
          'restitution':0.5
      }
      this.body = Bodies.rectangle(100,10,50,50, options);
      World.add(world, this.body);
    }
    display(){
     
      rectMode(CENTER);
      rect(this.body.position.x,this.body.position.y,50,50);
     
    }
  }