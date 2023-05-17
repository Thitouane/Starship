import MoveState from './MoveState.js'; 
class StarShip extends Mobile {
    constructor(){
        super(x,y,0,8);
        this.img.src = " assets/images/vaisseau-ballon-petit.png";
        this.moving = MoveState.IMMOBILE;
    }

    get up() {
        return this.moving == MoveState.HAUT;
    }

    set up() {
        this.moving = MoveState.HAUT;
    }

    get down() {
        return this.moving == MoveState.BAS;
    }

    set down() {
        this.moving = MoveState.BAS;
    }

    move(){ //deplacement verticale seulement
        if (this.down && 0 <= this.y <= theGame.heigth) {
            this.y = this.y + this.vv;
        }
    }
}