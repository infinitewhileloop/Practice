// https://edabit.com/challenge/9kB7LsxejgoAeFrSB

function doSomething(isGoingToResolve = true) {
    return new Promise((resolve, reject) => {
        if (isGoingToResolve) {
            resolve('something');
        } else {
            reject('something else');
        }
    }).then(response => {
        console.log('in my function', response);
        return response;
    }).catch(error => {
        console.log('in my function', error);
        return error;
    });
}

doSomething().then(response => {
    console.log('in my main call', response);
});
