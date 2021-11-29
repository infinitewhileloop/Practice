// https://www.codewars.com/kata/5483366098aa442def0009af/

class Hex {
    constructor(decInput) {
        this._dec = decInput;
        this._hex = decInput.toString(16) 
    }
    toString() {
        return `0x${this._hex.toUpperCase()}`;
    }
    toJSON() {
        return this.toString();
    }
    valueOf() {
        return this._dec;
    }
    plus(input) {
        if (input instanceof Hex) {
            return new Hex(this._dec + input._dec);
        } else if (!isNaN(input)) {
            return new Hex(this._dec + input);
        }
    }
    minus(input) {
        if (input instanceof Hex) {
            return new Hex(this._dec - input._dec);
        } else if (!isNaN(input)) {
            return new Hex(this._dec - input);
        }
    }
    static parse(hexInput) {
        return parseInt(hexInput, 16);
    }
}
