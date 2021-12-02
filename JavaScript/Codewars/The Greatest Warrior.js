// https://www.codewars.com/kata/5941c545f5c394fef900000c/

class Warrior {

    constructor() {
        this._experience = 100;
        this._level = 1;
        this._rank = 0;
        this._achievements = [];
        this._ranksList = ["Pushover", "Novice", "Fighter", "Warrior", "Veteran", "Sage", "Elite", "Conqueror", "Champion", "Master", "Greatest"];
    }

    level() { return this._level; }
    experience() { return this._experience; }
    rank() { return this._ranksList[this._rank]; }
    achievements() { return this._achievements; }

    updateLevel() { 
        this._level = Math.floor(this._experience / 100);
    }
    updateRank() { this._rank = Math.min(100, Math.floor(this._level / 10)); }
    updateExperience(extraPoints) {
        this._experience = Math.min(10000, this._experience + extraPoints);
    }

    calculateRank(enemyLevel) { return Math.floor(enemyLevel / 10); }

    battle(enemyLevel) {
        let levelDiff = enemyLevel - this._level;
        let rankDiff = this.calculateRank(enemyLevel) - this._rank;

        if (enemyLevel < 1 || enemyLevel > 100) return 'Invalid level';
        if (rankDiff >= 1 && levelDiff >= 5) return `You've been defeated`;

        if (levelDiff === 0) {  // enemy of same level
            this.updateExperience(10);   
            this.updateLevel();
            this.updateRank();
            return 'A good fight';
        } else if (levelDiff === -1) {  // enemy one level lower
            this.updateExperience(5);   
            this.updateLevel();
            this.updateRank();
            return 'A good fight';
        } else if (levelDiff <= -2) {  // enemy two or more levels lower
            this.updateLevel();
            this.updateRank();
            return 'Easy fight';
        } else { // enemy of higher level
            this.updateExperience(20 * levelDiff * levelDiff);   
            this.updateLevel();
            this.updateRank();
            return 'An intense fight';
        }
    }

    training(arr) {
        let [description, points, minLevel] = arr;
        if (this._level >= minLevel) {
            this.updateExperience(points);
            this.updateLevel();
            this.updateRank();
            this._achievements.push(description);
            return description;
        } else {
            return 'Not strong enough';
        }
    }
}
