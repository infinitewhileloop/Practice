// https://edabit.com/challenge/CstPAznqLdPSPYyAC

let errorLog = {};

let promise = new Promise(function(resolve, reject) {
    reject(new Error('Something failed'));
}).catch((err) => errorLog = err);
