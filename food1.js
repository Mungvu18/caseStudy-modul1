class Foodtoxic {
    constructor(game) {
        this.game = game;
        this.x = 100;
        this.y = 200;
        this.unit = 20;
    }

    display() {
        this.x = (Math.floor(Math.random() * CELLGRID)) * this.unit;
        this.y = (Math.floor(Math.random() * CELLGRID)) * this.unit;
    }

    draw() {
        this.game.context.fillStyle = "black";
        this.game.context.fillRect(this.x, this.y, this.unit, this.unit);
    }
}