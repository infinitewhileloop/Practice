// https://www.codewars.com/kata/5264603df227072e6500006d/

class Jar {

    constructor() {
        this.components = {};
        this.totalAmount = 0;
    }

    add(amount, component) {
        this.components[component] = (this.components[component] || 0) + amount;
        this.totalAmount += amount;
    }
    getTotalAmount() {
        return this.totalAmount;
    }
    getConcentration(component) {
        if (!this.components.hasOwnProperty(component)) return 0;
        else if (this.totalAmount === 0) return 0;
        else return this.components[component] / this.totalAmount;
    }
    pourOut(amount) {
        let percentagePouredOut = amount / this.totalAmount;
        this.totalAmount -= amount;
        for (let component in this.components) {
            this.components[component] *= (1 - percentagePouredOut);
        }
    }
}
