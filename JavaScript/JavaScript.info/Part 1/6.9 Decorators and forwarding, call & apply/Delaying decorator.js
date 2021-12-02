// https://javascript.info/call-apply-decorators#delaying-decorator

function delay(func, ms) {

    return function() {
        setTimeout(() => func.call(this, ...arguments), ms);
    }
}
