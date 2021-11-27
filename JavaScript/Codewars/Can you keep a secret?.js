// https://www.codewars.com/kata/5351b35ebaeb67f9110012d2/

function createSecretHolder(secret) {

    let obj = {};
    obj = {
        _secret: secret,
        getSecret: function() {
            return this._secret;
        },
        setSecret: function(newSecret) {
            this._secret = newSecret;
        }
    }
    return obj;
}
