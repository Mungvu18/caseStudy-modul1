class ManaGame {
    constructor() {
        this.canvas = document.getElementById('canvas');
        this.context = this.canvas.getContext('2d');
        this.snake = new Snake(this);
        this.foodToxic = new Foodtoxic(this);
        this.food = new Food(this);
        this.bigFood = new Bigfood(this);
        this.score = 0;
    }

    drawScore() {
        this.context.beginPath();
        this.context.fillstyle = "blue";
        this.context.font = "bold 20px verdana, sans-serif";
        this.context.fillText("score  " + this.score, 10, 20);
        if (this.score > 5) {
            levelnormal();
        } else if (this.score > 10) {
            levelhard();
        }
    }

    drawbackgoundlaw() {
        this.backgroundGame = document.getElementById('backgroundGame');
        this.context.beginPath();
        this.context.drawImage(this.backgroundGame, 0, 0);
        document.addEventListener('keydown', ev => {
            if (ev.keyCode == 13) {
                startGame();
            }
        })
    }

    drawbackground() {
        this.grass = document.getElementById('grass');
        this.context.beginPath();
        this.context.drawImage(this.grass, 0, 0);
    }
    display() {
        this.snake.display();
        if (this.snake.eat(this.food.x, this.food.y)) {
            this.food.display();
        }
        if (this.snake.eatBigFood(this.bigFood.x, this.bigFood.y)) {
            this.bigFood.display();
        }
        if (this.snake.eatToxic(this.foodToxic.x, this.foodToxic.y)) {
            this.foodToxic.display();
        }
    }

    // hàm xóa
    clearRect() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    // ham ve
    draw() {
        // this.clearRect();
        this.snake.draw();
        this.food.draw();
        this.foodToxic.draw();
        this.bigFood.draw();
    }
}  // hàm chạy game



