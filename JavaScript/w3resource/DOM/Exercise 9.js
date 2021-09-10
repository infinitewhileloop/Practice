function getOptions() {

	let log = console.log;

	let select = document.querySelector('#mySelect');

	let numberOfOptions = select.childElementCount;

	for (let i = 0; i < numberOfOptions; i++) {

		window.alert(`Option number ${i + 1} is: ${select[i].textContent}`);
	}
}
