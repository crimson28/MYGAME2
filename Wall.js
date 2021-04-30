class Wall {

    constructor(x,y,width,height){
        
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = "white";
        this.wall;
        
    }


    display(){

       
       this.wall = createSprite(this.x,this.y,this.width,this.height);
       this.wall.shapeColor = this.color;

        
    }
}
