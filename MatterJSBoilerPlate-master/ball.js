class Ball{
    constructor(x, y, r){
        var options = {
            isStatic: false,
            restitution: 0.2,
            friction: 1.0,
            density: 1.0
        }

        this.x = x;
		this.y = y;
		this.radius = r
		this.body = Bodies.circle(this.x, this.y, this.radius/2, options)
		World.add(world, this.body);
    }
    display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(this.body.angle);
        rectMode(CENTER);
        fill(200);
        ellipse(0,0,this.radius, this.radius);
        pop();

        
      }
}