let paddle;

function setup() {
	createCanvas(800,600);
	game = new Pong();
}

function draw() {
	background(51);
	if (!game.paused) {
		// update
		if (game.ball.collide(game.p1.paddle) || game.ball.collide(game.p2.paddle) ) {
			game.ball.swat();
		}
		game.p1.paddle.update();
		game.p2.paddle.update();
		game.ball.update();
	} else {
		game.pauseScreen();
	}
	// draw
	if (game.debug) { game.showInfo(); }
	game.p1.paddle.draw();
	game.p2.paddle.draw();
	game.ball.draw();
}

class Pong {
	constructor() {
		this.background = 51;
		this.p1 = new Player(width - 30, height/2);
		this.p2 = new Player(30, height/2);
		this.ball = new Ball(width/2, height/2);
		this.debug = false;
		this.paused = false;
	}

	showInfo() {
		textSize(12);
		fill(color(0, 255, 255));
		textAlign(LEFT);
		text("PADDLE 1\nposition: (" + game.p1.paddle.x + ", " + game.p1.paddle.y + ")\ndy: " + approx(game.p1.paddle.dy), 10, 20);
		text("PADDLE 2\nposition: (" + game.p2.paddle.x + ", " + game.p2.paddle.y + ")\ndy: " + approx(game.p2.paddle.dy), 210, 20);
		text("BALL\nposition: (" + approx(game.ball.x) + ", " + approx(game.ball.y) + ")\ndx: " + approx(game.ball.dx) + "\ndy: " + approx(game.ball.dy), 410, 20);
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

function keyPressed() {
  if (keyCode === UP_ARROW) { game.p1.paddle.moveUp(); }
  if (keyCode === DOWN_ARROW) { game.p1.paddle.moveDown(); }
  if (key == 'A') { game.p2.paddle.moveUp(); }
  if (key == 'Z') { game.p2.paddle.moveDown(); }
  if (keyCode === ENTER) {
  	game.ball.kill();
  	game.ball = new Ball(width/2, height/2);
  }
  if (key == 'D') { game.debug = !game.debug; }
}

function mousePressed() {
	game.paused = !game.paused;
}

function approx(val, n) {
	return val.toFixed(n);
}