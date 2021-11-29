// https://www.codewars.com/kata/56fcc1ee45040039ab0016da/

class Cube {
    constructor(length) {
        this.length = length;
    }
    get surfaceArea() {
        return 6 * (this.length ** 2);
    }
    set surfaceArea(newSurfaceArea) {
        this.length = Math.sqrt(newSurfaceArea / 6);
    }
    get volume() {
        return Math.pow(this.length, 3);
    }
    set volume(newVolume) {
        this.length = Math.cbrt(newVolume);
    }
}
