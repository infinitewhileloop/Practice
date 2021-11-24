// https://www.codewars.com/kata/52742f58faf5485cae000b9a/

function formatDuration(seconds) {

    if (seconds === 0) return 'now';

    let time = {
        year: { value: 0, rank: 0, inSeconds: 60 * 60 * 24 * 365 },
        day: { value: 0, rank: 1, inSeconds: 60 * 60 * 24 },
        hour: { value: 0, rank: 2, inSeconds: 60 * 60 },
        minute: { value: 0, rank: 3, inSeconds: 60 },
        second: { value: 0, rank: 4, inSeconds: 1 }
    }

    // convert e.g. 0 to key 'year'
    const getKeyByRank = rank => Object.keys(time).find(key => time[key]['rank'] === rank);

    let outputArr = [];

    // loop over all units of time, starting with unit with rank 0
    for (let i = 0; i < Object.keys(time).length; i++) {

        let curKey = getKeyByRank(i);

        if (seconds >= time[curKey]['inSeconds']) {

            let wholeUnits = Math.floor(seconds / time[curKey]['inSeconds']);
            time[curKey]['value'] = wholeUnits;
            seconds -= (wholeUnits * time[curKey]['inSeconds']);

            if (time[curKey]['value'] === 1) outputArr.push(`${time[curKey]['value']} ${curKey}`);  // singular
            else if (time[curKey]['value'] > 1) outputArr.push(`${time[curKey]['value']} ${curKey}s`);  // plural
        }
    }

    return outputArr
        .join(', ')
        .replace(/,(?!.*,)/, ' and');  // replace last comma by 'and'
}
