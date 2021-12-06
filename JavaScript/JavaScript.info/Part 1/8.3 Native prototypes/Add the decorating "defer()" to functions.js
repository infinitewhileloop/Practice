// https://javascript.info/native-prototypes#add-the-decorating-defer-to-functions

Function.prototype.defer = function(ms) {

    let func = this;

    return function(...args) {
        setTimeout(() => func(...args), ms)
    }
}
