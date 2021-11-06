// https://edabit.com/challenge/2FF7RKw9RLwc3EBY9

class Challenge {
    constructor(id, level) {
        this.id = id;
        this.level = level;
        this.points = this.calcPoints()
    }
    calcPoints() {
        let calcPointsTable = { VE: 5, EA: 10, ME: 20, HA: 40, VH: 80, EX: 120 };
        return calcPointsTable[this.level];
    }
}

class User {
    constructor(name, xp, log) {
        this.name = name;
        this.xp = xp;
        this.log = log;
    }
    newSolvedChallenge(challenge) {
        this.xp += challenge.calcPoints();
        this.log.push(challenge.id)
    }
}

let user1 = new User('Madam', 0, []);
let user2 = new User('Steve', 0, []);

let challenge1 = new Challenge(1, 'VE');
let challenge2 = new Challenge(2, 'EA');
let challenge3 = new Challenge(3, 'ME');
let challenge4 = new Challenge(4, 'HA');
let challenge5 = new Challenge(5, 'VH');
let challenge6 = new Challenge(6, 'EX');

user1.newSolvedChallenge(challenge1);
user1.newSolvedChallenge(challenge4);
user1.newSolvedChallenge(challenge6);
user2.newSolvedChallenge(challenge5);
user2.newSolvedChallenge(challenge3);
user2.newSolvedChallenge(challenge2);
