// https://edabit.com/challenge/R8atdhgsG4B69AZzR

function saySomething(str) {
	throw "what the heck";
}

let ERR = "";

const wait = str => {
    return new Promise(() => {
        setTimeout(() => {
            saySomething(str);
        }, 1000)
    })
    .catch(err => ERR = err); 
}

wait();
