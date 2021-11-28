// https://www.codewars.com/kata/547274e24481cfc469000416/

class Human {}
class Man extends Human {}
class Woman extends Human {}

class God {
    static create() {
        return [new Man(), new Woman()];
    }
}
