// https://edabit.com/challenge/Nc75jSjR5nuBfx7TK

class Twitter {
    #password
    #tweetsArr = []
    constructor(user, pass) {
        this.user = user;
        this.#password = this.encrypt(pass);
    }
    encrypt(str) {
        return str + '007';
    }
    checkPassword(input) {
        return this.encrypt(input) == this.#password;
    }
    get password() {
        return '****';
    }
    set password(val) {
        return;
    }
    get tweets() {
        let copy = this.#tweetsArr.slice();
        return copy;
    }
    set tweet(str) {
        this.#tweetsArr.push(str);
    }
}
