class Pong {
	constructor() {
		this.background = 51;
		this.p1 = new Player(width - 30, height/2);
		this.p2 = new Player(30, height/2);
		this.ball = new Ball(width/2, height/2);
		this.hud = true;
		this.paused = false;
		this.hits = 0;
		this.ballCount = 0;
		this.maxScore = 5;
	}

	update() {
		this.p1.paddle.update();
		this.p2.paddle.update();
		if (this.ball.y + this.ball.dy <= this.ball.minY || this.ball.y + this.ball.dy >= this.ball.maxY) {
			this.ball.dy *= -1;
		}
		if (this.ball.x + this.ball.dx < this.ball.minX) {
			this.ball.x = width;
			this.p1.score();
		}
		if (this.ball.x + this.ball.dx >= this.ball.maxX) {
			this.ball.x = 0;
			this.p2.score();
		}
		this.ball.x += this.ball.dx;
		this.ball.y += this.ball.dy;
		this.ball.r += this.ball.dr;
	}

	showInfo() {
		textSize(12);
		fill(color(0, 255, 255));
		textAlign(LEFT);
		let gameStats = `Ball: ${this.ballCount}
Hits: ${this.hits}`;
		text(gameStats, 40, 20);
		let p1Info = `PLAYER 1
Score: ${this.p1.points}
Paddle @ (${this.p1.paddle.x},${this.p1.paddle.y}) with dy = ${this.p1.paddle.dy}`
		let p2Info = `PLAYER 2
Score: ${this.p2.points}
Paddle @ (${this.p2.paddle.x},${this.p2.paddle.y}) with dy = ${this.p2.paddle.dy}`
	 	textAlign(CENTER);
		let ballInfo = `Ball @ (${approx(this.ball.x)},${approx(this.ball.y)}) with velocity (${approx(this.ball.dx,2)},${approx(this.ball.dy,2)})`;
		text(ballInfo, width/2, height - 10);
	 	textAlign(RIGHT);
		text(p1Info, width-40, height - 40);
	 	textAlign(LEFT);
		text(p2Info, 40, height - 40);
	}
	
	pauseScreen() {
		fill(color(255, 0, 0, 10));
		rect(width/2, height/2, width, height);
		textSize(24);
		fill(color(0, 255, 255));
		textAlign(CENTER);
		text("PAUSED", width/2, height/2);
	}

	showScores() {
		textSize(24);
		textAlign(RIGHT);
		text(this.p1.points, width - 20, 30);
		textAlign(LEFT);
		text(this.p2.points, 20, 30);
	}
}