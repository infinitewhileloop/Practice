// https://www.youtube.com/watch?v=yehTgRM3jl0


// Exercise One

let table = document.querySelector('.table');
let numberOfRows = table.querySelector('tbody').children.length;

let row = table.insertRow(numberOfRows);

let cell1 = row.insertCell(0);
let cell2 = row.insertCell(1);
let cell3 = row.insertCell(2);
let cell4 = row.insertCell(3);

cell1.textContent = '6';
cell2.textContent = 'Sean';
cell3.textContent = 'Reyes';
cell4.textContent = '@sreyes';


// Exercise Two

tbody.children[3].children[3].innerText = '@dixon1';


// Exercise Three

let rosaRow = document.querySelector('.table tr:nth-child(5)');
tbody.insertBefore(rosaRow, tbody.firstElementChild.nextSibling);

let allRows = [...document.getElementsByTagName('tr')];

allRows.forEach((row, index) => {
	if (index !== 0) {
		row.firstElementChild.innerText = index;
	}
});


// Exercise Four

let handleCells = [document.querySelector('.table th:nth-child(4)'), 
	...document.querySelectorAll('.table tr td:nth-child(4)')];

allRows = [...document.getElementsByTagName('tr')];

allRows.forEach((row, index) => {
	row.insertBefore(handleCells[index], row.children[1]);
});


// Exercise Five

let rows = document.querySelectorAll('.table tr:nth-child(even)');

rows.forEach(row => row.style.background = 'Gainsboro');
