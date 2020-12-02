class Food {
    constructor(game) {
        this.game = game;
        this.x = 200;
        this.y = 200;
        this.unit = 20;
    }

    display() {
        this.x = (Math.floor(Math.random() * 19)) * this.unit;
        this.y = (Math.floor(Math.random() * 19)) * this.unit;
    }

    draw() {
        this.game.context.fillStyle = "yellow";
        this.game.context.fillRect(this.x, this.y, this.unit, this.unit);
    }
}