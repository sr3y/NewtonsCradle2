class Rope{
    constructor(body1, body2, offsetX, offsetY){
        //offsetX, offsetY are the positions of pointB
        this.offsetX = offsetX;
        this.offsetY = offsetY;

        //bodyA and bodyB are the two points of the rope
        //pointB is just similar to bodyB and we give the name pointB to bodyB on displacement 
        var options = {
            bodyA : body1,
            bodyB : body2,
            pointB: {x: this.offsetX, y: this.offsetY}
        }
        //console.log(options)
        //Creating a sprite of rope and giving it some constraint 
        this.rope = Constraint.create(options)
        World.add(world, this.rope)
    }
    display(){
        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position;

        strokeWeight(2);

        var Anchor1X = pointA.x
        var Anchor1Y = pointA.y

        var Anchor2X = pointB.x + this.offsetX
        var Anchor2Y = pointB.y + this.offsetY

        line(Anchor1X, Anchor1Y, Anchor2X, Anchor2Y);
    }

}