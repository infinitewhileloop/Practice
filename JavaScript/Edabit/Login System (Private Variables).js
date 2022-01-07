// https://edabit.com/challenge/cHLjt2gv4vbguXm4x

class DeathStar {

    #correctPassphrase = 'palpatineIsMyHomeboy';
    #loginStatus = false;
    #users = {};

    addUser(user, password, passphrase, rank) {
        if (passphrase !== this.#correctPassphrase) { 
            return 'You rebel scum!';
        } else if (passphrase === this.#correctPassphrase) {
            new User(user, password, rank);
            this.#users[user] = {
                username: user,
                rank: rank,
                password: encrypt(password),
                failedLogins: 0
            };
            return 'User added!';
        } 
    }
    login (user, password) {
        if (! this.#users.hasOwnProperty(user)) {  // non existing user
            this.#loginStatus = false;
            return `Invalid login!`;
        } else if (this.#users[user].failedLogins >= 4) {  // too many failed login attempts
            return 'Account locked!';
        } else if (this.#users[user].password === encrypt(password)) {  // valid username/password combo
            this.#loginStatus = true;
            this.#users[user].failedLogins = 0;
            return `Welcome back, ${user}!`;
        } else {  // invald username/password combo
            this.#loginStatus = false;
            this.#users[user].failedLogins++;
            return `Invalid login!`;
        }
    }
    logout() {
        this.#loginStatus = false;
    }

    get loggedIn() {
        if (this.#loginStatus) return true;
        else return 'Not logged in!';
    }
    get userList() {
        if (this.#loginStatus) {
            const arr = Object.values(this.#users);
            arr.forEach(user => {
                delete user.password;
                delete user.failedLogins;
            });
            return arr; 
        } else {
            return 'Not logged in!';
        }
    }
}

class User {

    #password;
    #numIncorrectLogins;

    constructor(username, password, rank) {
        this.username = username;
        this.rank = rank;
        this.locked = false;
        this.#password = encrypt(password);

    }

    isCorrectPassword(candidate) {
        return candidate === decrypt(this.#password);
    }
}

const encrypt = str => [...str].reverse().join('');
const decrypt = str => [...str].reverse().join('');
