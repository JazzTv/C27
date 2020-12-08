class Chain 
{
    constructor(body1,body2)
    {
        var options = {
            bodyA : bird.body,
            bodyB : log6.body,
            stiffness : .03,
            length : 10
      }
    this.body = Constraint.create(options);
    World.add(world,this.body);
    }
    display ()
    {
        var firstPos = this.body.bodyA.position;
        var secondPos = this.body.bodyB.position;

        line(firstPos.x,firstPos.y,secondPos.x,secondPos.y);
    }
} 
