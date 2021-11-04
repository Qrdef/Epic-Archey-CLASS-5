class CompArrow{

    constructor(a,b,c,d)
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
    this.body=Bodies.rectangle(a,b,c,d,options)
    this.image=loadImage("assets/arrow.png")
    World.add(world,this.body);
    }
    
    
    display()
    {
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