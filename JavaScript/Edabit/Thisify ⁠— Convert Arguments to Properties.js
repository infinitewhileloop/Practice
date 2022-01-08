// https://edabit.com/challenge/5uWRWmCwPcBg2ff2v

function thisify(instance, passed) {
    
    const callerFunction = arguments.callee.caller;  // https://stackoverflow.com/questions/280389/how-do-you-find-out-the-caller-function-in-javascript
    const paramNames = getFuncParams(callerFunction);

    paramNames.forEach((param, index) => {
        instance[param] = passed[index];
    });
}

function getFuncParams(func) {  // https://stackoverflow.com/questions/1007981/how-to-get-function-parameter-names-values-dynamically
    return (func + '')
        .replace(/[/][/].*$/mg, '') // strip single-line comments
        .replace(/\s+/g, '') // strip white space
        .replace(/[/][*][^/*]*[*][/]/g, '') // strip multi-line comments  
        .split('){', 1)[0].replace(/^[^(]*[(]/, '') // extract the parameters  
        .replace(/=[^,]+/g, '') // strip any ES6 defaults  
        .split(',').filter(Boolean); // split & filter [""]
}  
