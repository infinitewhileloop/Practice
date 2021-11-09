// https://exercism.org/tracks/javascript/exercises/bank-account

class BankAccount {

    constructor() {
        this.isOpen = false;
        this._balance = 0;
    }

    get balance() {
        if (this.isOpen) return this._balance;
        else throw new Error('Account is closed.');
    }

    set balance(amount) {
        this._balance = amount;
    }

    open() {
        if (this.isOpen) throw new Error('Account is already open.');
        this.isOpen = true;
        this._balance = 0;
    }

    deposit(amount) {
        if (!this.isOpen) throw new Error('Account is not open.');
        else if(amount < 0) throw new Error('Amount is negative.');
        else (this._balance += amount);
    }

    withdraw(amount) {
        if (!this.isOpen) throw new Error('Account is not open.');
        else if (amount < 0) throw new Error('Amount is negative.')
        else if (this._balance >= amount) this._balance -= amount;
        else throw new Error('Balance is insufficient.')
    }

    close() {
        if (!this.isOpen) throw new Error('Account has already been closed.')
        this.isOpen = false;
        this._balance = 0;
    }
}
