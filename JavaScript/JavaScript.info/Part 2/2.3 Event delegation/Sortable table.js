grid.onclick = function (ev) {

    if (ev.target.tagName != 'TH') return;

    // calculate column index of clicked header
    let clickedTh = ev.target.textContent;
    let ths = grid.querySelectorAll('th');
    let headers = [...ths].map(th => th.textContent);
    let sortByCol = headers.indexOf(clickedTh);

    // get variable type
    let sortType = ev.target.dataset.type;

    sortTable(sortByCol, sortType)
};

function sortTable(sortByCol, sortType) {

    // select all rows except head row
    let trs = [...document.querySelectorAll('#grid tbody tr')];

    // convert rows to array
    let trsToArray = trs.map(tr => {
        let tmpArr = [];
        [...tr.children].forEach(child => tmpArr.push(child.textContent))
        return tmpArr;
    });

    // sort array
    if (sortType === 'number') {

        trsToArray.sort((a, b) => {
            if (parseInt(a[sortByCol]) > parseInt(b[sortByCol])) return 1;
            if (parseInt(a[sortByCol]) < parseInt(b[sortByCol])) return -1;
            else return 0;
        });

    } else if (sortType === 'string') {

        trsToArray.sort((a, b) => {
            return a[sortByCol].localeCompare(b[sortByCol]);
        });
    }

    // remove original rows
    trs.forEach(row => row.remove());

    // insert sorted rows
    let tbody = grid.querySelector('tbody');
    trsToArray.forEach(item => {
        let tr = document.createElement('tr');
        item.forEach(subitem => {
            let td = document.createElement('td');
            td.textContent = subitem;
            tr.append(td);
        });
        tbody.append(tr); 
    });
}
