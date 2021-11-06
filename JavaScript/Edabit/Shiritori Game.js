// https://edabit.com/challenge/6o5tYwwbY2ys7XTm4

class Shiritori {

    words = []
    game_over = false;

    play(newWord) {

        if(this.words.includes(newWord)) {
            this.game_over = true;
            return 'game over';
        }

        if (this.words.length === 0) {
            this.words.push(newWord);
            return this.words;
        }

        let lastWord = this.words[this.words.length - 1];
        let lastCharLastWord = lastWord.slice(-1);
        let firstCharNewWord = newWord[0];
        if (firstCharNewWord === lastCharLastWord ) {
            this.words.push(newWord);
            return this.words;
        } else {
            this.game_over = true;
            return 'game over';
        }
    }

    restart() {
        this.words = [];
        this.game_over = false;
        return 'game restarted';
    }
}
