// https://exercism.org/tracks/javascript/exercises/tournament

function tournamentTally(input) {

    if (input === '') return `Team                           | MP |  W |  D |  L |  P`;

    let inputArr = input.split('\n').map(item => item.split(';')); // convert input string to array

    let scores = {};  // create an object to keep all the teams' stats
    inputArr.forEach(row => {  // loop over each 'row' in the array

        let [firstTeam, secondTeam, result] = row;

        if (!scores.hasOwnProperty(firstTeam)) {  // if this is the first recorded game of this team, initialize it
            scores[firstTeam] = { mp: 0, w: 0, d: 0, l: 0, p: 0};
        }
        if (!scores.hasOwnProperty(secondTeam)) {
            scores[secondTeam] = { mp: 0, w: 0, d: 0, l: 0, p: 0};
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

    let objToArr = [];  // convert object to array, to make sorting possible
    for (let key in scores) {
        objToArr.push([key, scores[key].mp, scores[key].w, scores[key].d, scores[key].l, scores[key].p]);
    }
    objToArr.sort((a, b) => {
        if (a[5] < b[5]) return 1;  // first sort by points
        else if (a[5] > b[5]) return -1;
        else {
            if (a[0] > b[0]) return 1;  // then alphabetically
            if (a[0] < b[0]) return -1;
            else return 0;
        }
    });

    let outputStr = `Team                           | MP |  W |  D |  L |  P\n`;
    for (let i = 0; i < objToArr.length; i++) {
        let numSpaces = 31 - objToArr[i][0].length;  // calculate number of spaces needed after team name
        outputStr += `${objToArr[i][0]}${' '.repeat(numSpaces)}|  ${objToArr[i][1]} |  \
${objToArr[i][2]} |  ${objToArr[i][3]} |  ${objToArr[i][4]} | \
${objToArr[i][5].toString().length === 2 ? objToArr[i][5] : ' ' + objToArr[i][5]}`;
        if (i !== objToArr.length - 1) outputStr += '\n';
    }

    return outputStr;
}
