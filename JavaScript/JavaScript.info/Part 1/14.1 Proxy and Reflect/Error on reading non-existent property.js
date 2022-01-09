// https://javascript.info/proxy#error-on-reading-non-existent-property

function wrap(target) {
    return new Proxy(target, {
        get(target, prop) {
            if (prop in target) {
                return target[prop];
            } else {
                throw new ReferenceError(`Property doesn't exit: "${prop}"`);
            }
        }
    });
}
