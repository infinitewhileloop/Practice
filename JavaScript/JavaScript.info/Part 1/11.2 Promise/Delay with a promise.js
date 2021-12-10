// https://javascript.info/promise-basics#delay-with-a-promise

function delay(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, ms)
    });
}
