// https://exercism.org/tracks/javascript/exercises/diffie-hellmanDiffie Hellman

class DiffieHellman {
    constructor(p, g) {
        this.p = p;
        this.g = g;
        [this.p, this.g].forEach(num => {
            if (num <= 0 || num >= 9999) throw new Error('Invalid input');
            if (!this.isPrime(num)) throw new Error('Argument is not prime');
        })
    }
    isPrime = num => {  // https://stackoverflow.com/questions/40200089/number-prime-test-in-javascript#
        if (num <= 1) return false;
        if (num % 2 === 0 && num > 2) return false;
        const s = Math.sqrt(num);
        for (let i = 3; i <= s; i += 2) {
            if (num % i === 0) return false;
        }
        return true;
    }

    getPublicKey(privateKey) {
        if (privateKey <= 1 || privateKey >= this.p) throw new Error('Invalid private key');
        return this.g ** privateKey % this.p;
    }

    getSecret(theirPublicKey, myPrivateKey) {
        return theirPublicKey ** myPrivateKey % this.p;
    }
}
