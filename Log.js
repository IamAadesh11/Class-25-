class log extends parent{

    constructor (x,y,height,angle){

    super(x,y,20,height,angle);
      
    
this.img= loadImage("sprites/wood2.png");
      
      Matter.Body.setAngle(this.body,angle);
        
    
    }
}
