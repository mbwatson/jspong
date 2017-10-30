class Pong {
	constructor() {
		this.background = 51;
		this.p1 = new Player(width - 30, height/2);
		this.p2 = new Player(30, height/2);
		this.ball = new Ball(width/2, height/2);
		this.hud = true;
		this.paused = false;
		this.hits = 0;
		this.maxScore = 5; // unimplemented
		this.scorebar = new Scorebar(width/(2*this.maxScore), 10, 2*this.maxScore);
	}

	update() {
		if (abs(this.p1.points - this.p2.points) == this.maxScore) {
			this.ball.stop();
			this.p1.points = 0;
			this.p2.points = 0;
		}
		this.p1.paddle.update();
		this.p2.paddle.update();
		if (this.ball.y + this.ball.dy <= this.ball.minY || this.ball.y + this.ball.dy >= this.ball.maxY) {
			this.ball.dy *= -1;
		}
		if (this.ball.x + this.ball.dx < this.ball.minX && this.ball.dx < 0) {
			this.ball.x = width;
			this.p1.score();
		}
		if (this.ball.x + this.ball.dx >= this.ball.maxX && this.ball.dx > 0) {
			this.ball.x = 0;
			this.p2.score();
		}
		this.ball.x += this.ball.dx;
		this.ball.y += this.ball.dy;
		this.ball.r += this.ball.dr;
	}

	showHUD() {
		textSize(12);
		fill(color(0, 255, 255));
		textAlign(LEFT);
		let p1Info = `PLAYER 1
Paddle @ (${this.p1.paddle.x},${this.p1.paddle.y}) with dy = ${this.p1.paddle.dy}`
		let p2Info = `PLAYER 2
Paddle @ (${this.p2.paddle.x},${this.p2.paddle.y}) with dy = ${this.p2.paddle.dy}`
	 	textAlign(CENTER);
		let ballInfo = `Ball @ (${approx(this.ball.x)},${approx(this.ball.y)}) with velocity (${approx(this.ball.dx,2)},${approx(this.ball.dy,2)})`;
		text(ballInfo, width/2, height - 10);
	 	textAlign(RIGHT);
		text(p1Info, width-40, height - 25);
	 	textAlign(LEFT);
		text(p2Info, 40, height - 25);
	}
	
	pauseScreen() {
		fill(color(255, 0, 0, 10));
		rectMode(CENTER)
		rect(width/2, height/2, width, height);
		textSize(24);
		fill(color(0, 255, 255));
		textAlign(CENTER);
		text("PAUSED", width/2, height/2);
	}

}