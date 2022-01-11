// https://edabit.com/challenge/WyuiphFcBXZSoKpEt

class StackCalc {

    constructor(inputStr) {
        this.stack = [];
        this.result = 0;
    }

    run(inputInstr) {

        // verify if all elements in instructions are valid
        const inputArr = inputInstr.split(' ');
        const legalInstr = ['+', '-', '*', '/', 'DUP', 'POP'];

        inputArr.forEach(item => { // if item is neither valid instruction nor number (and is first invalid item)
            if (!legalInstr.includes(item) && !Number.isInteger(+item) && this.result === 0) {
                this.result = `Invalid instruction: ${item}`;
            }
        });
        if (this.result !== 0) return this.result;  // stop script if invalid input detected

        // loop over items of input array
        while (inputArr.length !== 0) {

            let item = inputArr[0];

            if (Number.isInteger(+item)) {  // item is number
                this.stack.push(+item);
                inputArr.shift();  // delete number from input

            } else if ('+-*/'.includes(item)) {  // item is mathematical operation
                let lastTwoVals = this.stack.slice(-2);
                this.stack.pop();
                this.stack.pop();
                let highestVal = Math.max(...lastTwoVals);
                let lowestVal = Math.min(...lastTwoVals);
                switch (item) {
                    case '+':
                        this.stack.push(lowestVal + highestVal);
                        break;
                    case '-':
                        this.stack.push(highestVal - lowestVal);
                        break;
                    case '*':
                        this.stack.push(lowestVal * highestVal);
                        break;
                    case '/':
                        this.stack.push(highestVal / lowestVal);
                        break;
                }
                inputArr.shift();  // delete instruction

            } else {  // item is programming operation
                switch (item) {
                    case 'DUP':
                        this.stack.push(this.stack[this.stack.length - 1]);  // push last value in stack once more
                        break;
                    case 'POP':
                        this.stack.pop();
                        break;
                }
                inputArr.shift();  // delete instruction
            }
        }

        if (this.stack.length === 0) this.result = 0;
        else this.result = this.stack[this.stack.length - 1];
    }
    get value() {
        return this.result;
    }
}
