class Bird extends parent {

constructor (x,y){

   super(x,y,50,50);
  

this.img= loadImage ("sprites/bird.png");

   
}

display (){

var pos = this.body.position 
pos.x = mouseX 
pos.y = mouseY 
super.display();

}

}