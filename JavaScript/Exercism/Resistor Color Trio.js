// https://exercism.org/tracks/javascript/exercises/resistor-color-trio/

class ResistorColorTrio {

    constructor(colors) {
        this.label = this.createLabels(colors);
    }

    createLabels(inputColors) {

        const possColors = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white'];

        const vals = inputColors.map(color => {
            if (!possColors.includes(color)) throw new Error('invalid color');
            return possColors.indexOf(color);
        });

        const totalVal = ((vals[0] * 10 + vals[1]) * 10 ** vals[2]);
        const msg = 'Resistor value:';

        if (totalVal >= 1000) return `${msg} ${totalVal / 1000} kiloohms`;
        else return `${msg} ${totalVal} ohms`;
    }
}
