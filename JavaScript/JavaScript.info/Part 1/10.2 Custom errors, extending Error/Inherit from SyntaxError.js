// https://javascript.info/custom-errors#inherit-from-syntaxerror

class FormatError extends SyntaxError {

    constructor(message) {
        super(message);
        this.name = this.constructor.name;
    }
}
