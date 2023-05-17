
class Game {
    constructor(canvas){
        this.width = canvas.width;
        this.height = canvas.height;
        this.canvas = canvas;
        this.vaisseau = new StarShip(40,200);
        this.soucoupes = new Array();
        this.score = 0;
    }

    get width() {
        return this.width;
    }

    set width(w) {
        this.width = w;
    }

    get height() {
        return this.height;
    }

    set height(h) {
        this.height = h;
    }

    addSoucoupe(soucoupe) {
        this.soucoupes.push(soucoupe);
    }

    delSoucoupe(soucoupe) {
        this.soucoupes = this.soucoupes.filter(sou => sou != soucoupe);
    }

    setScore(score) {
        this.score = score;
    }

    anime(){

    }
    // fleche haut / fleche bas
}