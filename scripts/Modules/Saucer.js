export default class Saucer extends Mobile {
    constructor() {
        super(x,y,-3,0);
        this.img.src = "assets/images/flyingSaucer-petit.png";
    }

    move() { //deplacement horizontal seulement
        if (0 <= this.x) {
            theGame.delSoucoupe(this);
        } else {
            this.x = this.x + this.vh;
        }
    }
}