class Pong {
	constructor() {
		this.background = 51;
		this.p1 = new Player(width - 30, height/2);
		this.p2 = new Player(30, height/2);
		this.ball = new Ball(width/2, height/2);
		this.hud = true;
		this.paused = false;
		this.hits = 0;
	}

	showInfo() {
		textSize(12);
		fill(color(0, 255, 255));
		textAlign(LEFT);
		let gameStats = `Hits: ${this.hits}`;
		text(gameStats, 40, 20);
		let p1Info = `PLAYER 1
Score: ${this.p1.score}
Paddle @ (${this.p1.paddle.x},${this.p1.paddle.y}) with dy = ${this.p1.paddle.dy}`
		let p2Info = `PLAYER 2
Score: ${this.p2.score}
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
}