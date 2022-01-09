// https://javascript.info/proxy#accessing-array-1

array = new Proxy(array, {
    get(target, index, receiver) {
        if (index < 0) {
            log(index)
            const absIndex = Math.abs(index);
            const newIndex = target.length - absIndex;
            return Reflect.get(target, newIndex, receiver);
        } else {
            return Reflect.get(target, index, receiver);
        }
    }
});
