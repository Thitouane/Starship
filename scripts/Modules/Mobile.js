export default class Mobile {
    constructor(x, y, vh = 0, vv = 0) {
        this.x = x;
        this.y = y;
        this.img = new Image();
        this.vh = vh;
        this.vv = vv;
    }

    draw(context){
        this.img.addEventListener('load', 
            context.drawImage(this.img, this.x, this.y)
        );  
    }

    move() {
        this.x = this.x + this.vh;
        this.y = this.y + this.vv;
    }
}