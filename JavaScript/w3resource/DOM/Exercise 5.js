function insert_Row() {

	let table = document.getElementById('sampleTable');

	let newRow = document.createElement('tr');
	let newLeftCell = document.createElement('td');
	let newRightCell = document.createElement('td');

	newLeftCell.textContent = 'Row 3 cell 1';
	newRightCell.textContent = 'Row 3 cell 2';

	newRow.appendChild(newLeftCell);
	newRow.appendChild(newRightCell);
	table.appendChild(newRow); 
}
