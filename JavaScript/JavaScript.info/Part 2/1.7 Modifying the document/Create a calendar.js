function createCalendar(elem, year, month) {

    let targetElem = document.getElementById(elem);

    let firstDayMonth = new Date(year, month - 1, 1);
    let lastDayMonth = new Date(year, month, 0);

    let table = document.createElement('table');
    targetElem.append(table);
    table.innerHTML = `<tr>
        <th>MO</th>
        <th>TU</th>
        <th>WE</th>
        <th>TH</th>
        <th>FR</th>
        <th>SA</th>
        <th>SU</th>
    </tr>`;
    
    let arr = [];

    // add preceding empty cells
    let numberOfPrecedingEmptyCells;
    if (firstDayMonth.getDay() === 0) {
        numberOfPrecedingEmptyCells = 6;
    } else {
        numberOfPrecedingEmptyCells = firstDayMonth.getDay() - 1;
    }
    for (let i = 0; i < numberOfPrecedingEmptyCells; i++) {
        arr.push('');
    }

    // add day numbers (1-31)
    let day = firstDayMonth;
    let lastDayMonthNumber = lastDayMonth.getDate();
    for (let k = 1; k <= lastDayMonthNumber; k++) {
        arr.push(k);
    }

    // add succeeding empty cells
    let numberOfSucceedingEmptyCells;
    if (lastDayMonth.getDay() === 0) {
        numberOfSucceedingEmptyCells = 0;
    } else {
        numberOfSucceedingEmptyCells = 7 - lastDayMonth.getDay();
    }
    for (let j = 0; j < numberOfSucceedingEmptyCells; j++) {
        arr.push('');
    }

    // transform array to subarrays of 7 items each
    let arrPerWeek = [];
    for (let l = 0; l < arr.length / 7; l++) {
        arrPerWeek.push(arr.slice(l * 7, (l * 7) + 7));
    }

    // add items to table
    let row;
    let cell;
    for (let m = 0; m < arrPerWeek.length; m++) {

        row = table.insertRow();

        for (let n = 0; n < 7; n++) {
            cell = row.insertCell();
            cell.innerText = arrPerWeek[m][n];
        }
    }
}
