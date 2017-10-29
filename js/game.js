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
			game.hits += 1;
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