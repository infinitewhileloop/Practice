// https://javascript.info/class-inheritance#extended-clock

class ExtendendClock extends Clock {

    constructor({ template, precision }) {
        super({template});
        this.precision = precision;
    }

    start() {
        super.render();
        super.timer = setInterval(() => super.render(), this.precision);
    }
}
