class Scorebar {
	constructor(width, height, num) {
		this.blockWidth = width;
		this.blockHeight = height;
		this.blocks = num // on each side -- half total number of blocks
		this.val = 0;
	}

	draw(score1, score2) {
		let diff = score1 - score2;
		fill(255);
		stroke(255);
		rectMode(CORNER)
		fill(51, 100);
		stroke(255, 100);
		for (let i = -this.blocks; i < this.blocks; i++) {
			rect(width/2 + i * this.blockWidth, 0, this.blockWidth, this.blockHeight);
		}
		fill(240, 100);
		if (diff > 0) {
			for (let i = 0; i < diff; i++) {
				rect(width/2 + i * this.blockWidth, 0, this.blockWidth, this.blockHeight);
			}			
		}
		if (diff < 0) {
			for (let i = diff; i < 0; i++) {
				rect(width/2 + i * this.blockWidth, 0, this.blockWidth, this.blockHeight);
			}			
		}
		noStroke();
	}
}