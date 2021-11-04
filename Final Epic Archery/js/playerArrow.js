class PlayerArrow{

    constructor(a,b,c,d,archerAngle)
    {
    var options={
       isStatic:true,
       restitution:0.8,
       friction:1.0,
       density:1.0
    }
    this.x=a;
    this.y=b;
    this.w=c;
    this.h=d;
    this.archerAngle=archerAngle
    this.body=Bodies.rectangle(a,b,c,d,options)
    this.image=loadImage("assets/arrow.png")
    this.velocity=0
    World.add(world,this.body);
    }
    remove(index)
    {
    this.isRemoved=true
    Matter.World.remove(world,this.body)
    delete playerArrows[index]
    
    
    
    
    
    
    
    
    
    }
    shoot(archerAngle)
    {
    archerAngle+=90
    this.velocity=p5.Vector.fromAngle(archerAngle*(3.14/180))
    this.velocity.mult(0.5)
Matter.Body.setVelocity(this.body,{
x:this.velocity.x*(180/3.14),
y:this.velocity.y*(180/3.14)

})
Matter.Body.setStatic(this.body,false)
    }
    
    display()
    {
    var tempAngle
    if(this.body.velocity.y==0)
    {
    tempAngle=this.archerAngle+90

    }
    else{
     Math.atan(this.body.velocity.y/this.body.velocity.x)*(180/3.14)

    }
    Matter.Body.setAngle(this.body,tempAngle)
    var pos=this.body.position
    var angle=this.body.angle
    push();
    translate(pos.x,pos.y);
    rotate(angle)
    imageMode(CENTER) 
    image(this.image,0,0,this.w,this.h)
    pop();
    
    
    }
    
    
    
    
    
    }