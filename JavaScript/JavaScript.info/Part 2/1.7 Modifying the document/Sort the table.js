let rows = document.querySelectorAll('tr');
let tbody = document.querySelector('tbody');

let rowsArr = [...rows]
    .map(item => item.outerText)
    .map(item => item.split('\t'))
    .filter(item => item[0] !== 'Name' && item[0] !== '...')
    .sort((a, b) => {
        if (a[0] > b[0]) return 1;
        else return -1;
    });

rows.forEach((item, index) => {
    if (index !== 0) {
        item.remove();
    }
});

rowsArr.forEach(item => {
    tbody.insertAdjacentHTML('beforeEnd', 
    `<tr>
        <td>${item[0]}</td>
        <td>${item[1]}</td>
        <td>${item[2]}</td>
    </tr>`)
});
