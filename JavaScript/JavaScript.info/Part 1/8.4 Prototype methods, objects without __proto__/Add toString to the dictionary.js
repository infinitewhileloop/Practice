// https://javascript.info/prototype-methods#add-tostring-to-the-dictionary

let dictionary = Object.create(null);

Object.defineProperty(dictionary, 'toString', {
    value: function() {
        return Object.keys(this).join(',');
    },
    enumerable: false
});

dictionary.apple = 'Apple';
dictionary.__proto__ = 'test';

for (let key in dictionary) {
    alert(key);
}

alert(dictionary);
