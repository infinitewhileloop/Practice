// https://exercism.org/tracks/javascript/exercises/triangle

class Triangle {

    constructor(...sides) {
        this.sides = sides;
        this.numUniqSides = new Set(sides).size;
    }

    get isValidTriangle() {
        return this.sides.every(side => side > 0)  // check if length of all sides is greater than 0
            && ((this.sides[0] + this.sides[1]) >= this.sides[2])  // check if sum of lenghts of any 2 sides is greater than/equal to length 3rd side
            && ((this.sides[1] + this.sides[2]) >= this.sides[0])
            && ((this.sides[0] + this.sides[2]) >= this.sides[1]);
    }

    get isEquilateral() {
        return this.isValidTriangle && this.numUniqSides === 1;
    }

    get isIsosceles() {
        return this.isValidTriangle && (this.numUniqSides === 2 || this.numUniqSides === 1);
    }

    get isScalene() {
        return this.isValidTriangle && this.numUniqSides === 3;
    }
}
