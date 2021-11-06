class Vec {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}
	plus(otherVec) {
		let sumX = this.x + otherVec.x;
		let sumY = this.y + otherVec.y;
		return new Vec(sumX, sumY);
	}
	minus(otherVec) {
		let diffX = this.x - otherVec.x;
		let diffY = this.y - otherVec.y;
		return new Vec(diffX, diffY);
	}
	get length() {
		return Math.sqrt(this.x ** 2 + this.y ** 2);
	}
}

console.log(new Vec(1, 2).plus(new Vec(2, 3)));
console.log(new Vec(1, 2).minus(new Vec(2, 3)));
console.log(new Vec(3, 4).length);
