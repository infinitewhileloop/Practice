// https://exercism.org/tracks/javascript/exercises/dnd-character

export const abilityModifier = input => {
    if (input < 3) throw new Error('Ability scores must be at least 3');
    if (input > 18) throw new Error('Ability scores can be at most 18');
    return Math.floor((input - 10) / 2);
};

export class Character {
    constructor() {
        this._strength = Character.rollAbility();
        this._dexterity = Character.rollAbility();
        this._constitution = Character.rollAbility();
        this._intelligence = Character.rollAbility();
        this._wisdom = Character.rollAbility();
        this._charisma = Character.rollAbility();
    }

    static rollAbility() {
        let diceRolls = [];

        for (let i = 0; i < 4; i++) {
            let rand = Math.ceil(Math.random() * 6);
            diceRolls.push(rand);
        }
    
        let largestThreeDice = diceRolls.sort().slice(-3);
    
        let sum = largestThreeDice.reduce((acc, cur) => acc + cur, 0);
    
        return sum;
    }

    get strength() {
        return this._strength;
    }
    get dexterity() {
        return this._dexterity;
    }
    get constitution() {
        return this._constitution;
    }
    get intelligence() {
        return this._intelligence;
    }
    get wisdom() {
        return this._wisdom;
    }
    get charisma() {
        return this._charisma;
    }
    get hitpoints() {
        return 10 + abilityModifier(this._constitution);
    }
}
