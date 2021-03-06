class Snake {
    constructor(game) {
        this.game = game;
        this.x = 20;
        this.y = 40;
        this.unit = 20;
        this.dx = this.unit;// khoang cach buoc nhay truc x
        this.dy = 0;// khoang cach buoc nhay truc y
        this.cell = [];// mang phan tu dot ran
        this.maxcells = 2;
    }

    // ham hien thi
    display() {
        // ham endGame tra ve ket qua true khi dau ran k dam vao ng ran, ket qua true thi van cho cong toa do
        if (this.endGame()) {
            this.x += this.dx;
            this.y += this.dy;
        }
        // dieu kien chay het 4 canh chuyen huong sang dau kia
        if (this.x >= this.game.canvas.width) {
            this.x = 0;
        } else if (this.x < 0) {
            this.x = this.game.canvas.width;
        }
        if (this.y >= this.game.canvas.width) {
            this.y = 0;
        } else if (this.y < 0) {
            this.y = this.game.canvas.width;
        }
        this.cell.unshift({x: this.x, y: this.y}); // them vao mang toa do x,y
        if (this.cell.length > this.maxcells) {
            this.cell.pop();
        }
        this.eventKeydown();
    }

    // ham bat su kien bam nut keyDown
    eventKeydown(ev) {
        document.addEventListener('keydown', ev => {
            if (flag == true) {
                if (ev.keyCode == KEYCODELEFT && this.dx == 0) {
                    this.dx = -this.unit;
                    this.dy = 0;
                } else if (ev.keyCode == KEYCODEUP && this.dy == 0) {
                    this.dx = 0;
                    this.dy = -this.unit;
                } else if (ev.keyCode == KEYCODERIGHT && this.dx == 0) {
                    this.dx = this.unit;
                    this.dy = 0;
                } else if (ev.keyCode == KEYCODEDOWN && this.dy == 0) {
                    this.dx = 0;
                    this.dy = this.unit;
                } else if (ev.keyCode == KEYCODESPACE) {
                    pauseGame();
                }
            } else {
                if (ev.keyCode == KEYCODEENTER) {
                    startGame();
                }
            }
        })
    }

    // ham ve con ran
    draw() {
        for (let i = 0; i < this.cell.length; i++) {
            this.game.context.fillStyle = (i == 0) ? "red" : "white";
            this.game.context.fillRect(this.cell[i].x, this.cell[i].y, 20, 20);
        }
        if (!this.endGame()) {
            this.maxcells = 0;
            this.game.context.font = '30px Pink Arial'
            this.game.context.fillText("You Lose Game!", 100, 100)
            pauseGame();
        }
    }

    // ham an moi
    eat(x, y) {
        if (this.x == x && this.y == y) {
            this.maxcells++;
            game.score++;
            eatmussic.play();
            return true;
        }
        return false;
    }
    eatBigFood(x, y) {
        if (this.x ==x && this.y == y) {
            this.maxcells+=2;
            game.score+=1;
            thankBoss.play();
            return true;
        }
        return false;
    }

    // phương thức ăn mồi độc
    eatToxic(x, y) {
        if (this.x == x && this.y == y) {
            game.score--;
            eatToxicmussic.play();
            if (this.maxcells > 1) {
                this.maxcells--;
            }
            if (game.score == -3) {
                this.maxcells = 0;
                this.game.context.fillText("You Lose Game", 100, 100);
            }
            this.cell.pop();
            return true;
        }
        return false;
    }

    // phương thúc check end
    endGame() {
        for (let i = 2; i < this.cell.length; i++) {
            if (this.x == this.cell[i].x && this.y == this.cell[i].y) {
                endGamemussic.play();
                return false;
            }
        }
        return true;
    }
}