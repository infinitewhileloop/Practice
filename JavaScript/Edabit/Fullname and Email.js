// https://edabit.com/challenge/kGLhgwGaLJsCMS7wS

class Employee {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.fullname = this.firstname + ' ' + this.lastname;
        this.email = `${this.firstname.toLowerCase()}.${this.lastname.toLowerCase()}@company.com`;
    }
}
