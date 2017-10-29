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
		text("Hits: " + game.hits, 10, 20);
		text("BALL\nposition: (" + approx(game.ball.x) + ", " + approx(game.ball.y) + ")\ndx: " + approx(game.ball.dx) + "\ndy: " + approx(game.ball.dy), 110, 20);
		text("PADDLE 1\nposition: (" + game.p1.paddle.x + ", " + game.p1.paddle.y + ")\ndy: " + approx(game.p1.paddle.dy), 310, 20);
		text("PADDLE 2\nposition: (" + game.p2.paddle.x + ", " + game.p2.paddle.y + ")\ndy: " + approx(game.p2.paddle.dy), 510, 20);
		text("Player 1 Score: " + game.p1.score, width-110, 0.97*height);
		text("Player 2 Score: " + game.p2.score, 10, 0.97*height);
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