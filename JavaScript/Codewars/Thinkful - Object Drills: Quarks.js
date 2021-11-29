// https://www.codewars.com/kata/5882b052bdeafec15e0000e6/

class Quark {
    constructor(color, flavor) {
        Object.assign(this, { color, flavor });
        this.baryon_number = 1 / 3;
    }
    interact(otherQuark) {
        let oldColor = this.color;
        this.color = otherQuark.color;
        otherQuark.color = oldColor;
    }
}
