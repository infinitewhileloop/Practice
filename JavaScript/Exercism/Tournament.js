// https://exercism.org/tracks/javascript/exercises/tournament

function tournamentTally(input) {

    if (input === '') return `Team                           | MP |  W |  D |  L |  P`;
    let inputArr = input.split('\n').map(item => item.split(';'));

    let scores = {};
    inputArr.forEach(row => {
        let [firstTeam, secondTeam, result] = row;
        if (!scores.hasOwnProperty(firstTeam)) {
            scores[firstTeam] = {};
            scores[firstTeam].mp = 0;
            scores[firstTeam].w = 0;
            scores[firstTeam].d = 0;
            scores[firstTeam].l = 0;
            scores[firstTeam].p = 0;
        }
         if (!scores.hasOwnProperty(secondTeam)) {
            scores[secondTeam] = {};
            scores[secondTeam].mp = 0;
            scores[secondTeam].w = 0;
            scores[secondTeam].d = 0;
            scores[secondTeam].l = 0;
            scores[secondTeam].p = 0;
        }
        
        if (result === 'win') {
            scores[firstTeam].mp += 1;
            scores[firstTeam].w += 1; 
            scores[firstTeam].p += 3;
            scores[secondTeam].mp += 1;
            scores[secondTeam].l += 1;
        } else if (result === 'loss') {
            scores[firstTeam].mp += 1;
            scores[firstTeam].l += 1; 
            scores[secondTeam].p += 3;
            scores[secondTeam].mp += 1;
            scores[secondTeam].w += 1;
        }
        else if (result === 'draw') {
            scores[firstTeam].mp += 1;
            scores[firstTeam].d += 1; 
            scores[firstTeam].p += 1;
            scores[secondTeam].mp += 1;
            scores[secondTeam].d += 1;
            scores[secondTeam].p += 1;
        }
    });

    let objToArr = [];
    for (let key in scores) {
        objToArr.push([key, scores[key].mp, scores[key].w, scores[key].d, scores[key].l, scores[key].p]);
    }
    objToArr.sort((a, b) => {
        if (a[5] < b[5]) return 1;
        else if (a[5] > b[5]) return -1;
        else {
            if (a[0] > b[0]) return 1;
            if (a[0] < b[0]) return -1;
            else return 0;
        }
    });

    let outputStr = `Team                           | MP |  W |  D |  L |  P\n`;
    for (let i = 0; i < objToArr.length; i++) {
        let numSpaces = 31 - objToArr[i][0].length;
        outputStr += `${objToArr[i][0]}${' '.repeat(numSpaces)}|  ${objToArr[i][1]} |  \
${objToArr[i][2]} |  ${objToArr[i][3]} |  ${objToArr[i][4]} | \
${objToArr[i][5].toString().length === 2 ? objToArr[i][5] : ' ' + objToArr[i][5]}`;
        if (i !== objToArr.length - 1) outputStr += '\n';
    }

    return outputStr;
}
