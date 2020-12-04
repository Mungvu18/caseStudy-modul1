class Bigfood{
    constructor(game) {
        this.game = game;
        this.x=100;
        this.y=300;
        this.unit = 20;
    }
    display() {
            this.x = (Math.floor(Math.random() * 10)) * this.unit;
            this.y = (Math.floor(Math.random() * 10)) * this.unit;
    }

    draw() {
        if (this.game.score > 0 && this.game.score % 5 == 0) {
            eatVioletFood.play();
            this.game.context.fillStyle = "violet";
            this.game.context.fillRect(this.x, this.y, this.unit, this.unit);
        }
    }
}