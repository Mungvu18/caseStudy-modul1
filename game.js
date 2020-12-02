class ManaGame {
    constructor() {
        this.canvas = document.getElementById('canvas');
        this.context = this.canvas.getContext('2d');
        this.snake = new Snake(this);
        this.foodToxic = new Foodtoxic(this);
        this.food = new Food(this);
        this.score=0;
    }
    drawScore(){
        this.context.beginPath();
        this.context.fillstyle="blue";
        this.context.font="bold 20px verdana, sans-serif";
        this.context.fillText("score  "+ this.score, 10,20);
    }
    drawbackground(){
        this.grass = document.getElementById('grass');
        this.context.beginPath();
        this.context.drawImage(this.grass,0,0);
    }
    display() {
        this.snake.display();
        if (this.snake.eat(this.food.x,this.food.y)) {
            this.food.display();
        }
        if (this.snake.eatToxic(this.foodToxic.x,this.foodToxic.y)) {
            this.foodToxic.display();
        }
    }
    // hàm xóa
    clearRect(){
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
    // ham ve
    draw() {
        // this.clearRect();
        this.snake.draw();
        this.food.draw();
        this.foodToxic.draw();
    }
}
let game = new ManaGame();
// setInterval(my(),1000)
    function startGame() {
        let run = setInterval(function (){
            game.clearRect();
            game.drawbackground();
            game.drawScore();
            game.display();
            game.draw();
        },1000);
    }
    function pauseGame() {
       clearInterval(run);
    }
    startGame();

