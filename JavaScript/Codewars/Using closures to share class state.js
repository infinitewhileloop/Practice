// https://www.codewars.com/kata/53583765d5493bfdf5001b35/

let count = 0;
let totalWeight = 0;

function Cat(name, weight) {

    Cat.averageWeight = function() {
        return Math.round(totalWeight / count * 99) / 100;
    }
    
    if (name === undefined || weight === undefined) throw new Error('Not every argument is specified!');

    this._name = name;
    this._weight = weight;
    
    Object.defineProperty(this, 'weight', {
        get: function() {
            return this._weight;
        },
        set: function(newVal) {
            totalWeight = totalWeight - this._weight + newVal;
            this._weight = newVal;
        }
    })

    count++;
    totalWeight += weight;
} 
