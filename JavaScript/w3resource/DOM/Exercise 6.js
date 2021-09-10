function changeContent(row, col, str) {

	let table = document.getElementById('myTable');
	let tableBody = table.querySelector('tbody');

	let myRow = tableBody.children[--row];

	let myCell = myRow.children[--col];

	myCell.textContent = str;
}
