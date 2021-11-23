// https://javascript.info/keyboard-events#extended-hotkeys

function runOnKeys(func, ...codes) {

    let status = {};
    codes.forEach(item => status[item] = false);  // give status object a property for every code, initialize it with false value

    document.addEventListener('keydown', ev => {
        if (status.hasOwnProperty(ev.code)) status[ev.code] = true;  // value of that code in object becomes true
        if (Object.values(status).every(item => item === true)) {  // run function if all object values are true
            func();  // run function
            for (let key in status) {  // set all object values back to false
                status[key] = false
            }
        } 
    });

    document.addEventListener('keyup', ev => {
        if (status.hasOwnProperty(ev.code)) status[ev.code] = false;  // value of that code in object becomes false
    });
}
