// https://edabit.com/challenge/Z5EwpzWB37HpbvmsG

let result = "";
let thenable = { then: function(onFulfill, onReject) { onFulfill("edabit!") }};
let promise = Promise.resolve(thenable);
promise.then(val => result = val);
