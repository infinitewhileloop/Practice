// https://dev.to/codebubb/javascript-dom-practice-exercises-for-beginners-21ml
// https://www.youtube.com/watch?v=EHF7xBUAmrQ

function highlightWordsOver8CharsLong() {
	
	let para = document.querySelector('p');

	let str = para.textContent;

	let pattern = /\b([\w-']{8,})\b/g;
	let replacement = '<span class="long">$1</span>';

	let regex = str.replaceAll(pattern, replacement);

	para.innerHTML = regex;
}


function addLink() {

	let p = document.querySelector('p');

	let newLink = document.createElement('a');
	newLink.href = 'https://forcemipsum.com/';
	newLink.textContent = 'Source';

	p.insertAdjacentElement('afterend', newLink);
}


function splitEachSentence() {

	let p = document.querySelector('p');

	let input = p.innerText;

	let split = input.split(/(?<=\w\.)\s/);

	let joined = split.join('<br>');

	p.innerHTML = joined;
}


function countNumberOfWords() {

	let h1 = document.querySelector('h1');
	let p = document.querySelector('p');

	let regex = p.innerText.match(/ /g);
	let total = regex.length + 1;

	let counter = document.createElement('p');
	counter.innerText = 'Count: ' + total;

	h1.insertAdjacentElement('afterend', counter);
}


function replaceQuestionExclamationMarks() {

	let p = document.querySelector('p');

	p.innerText = p.innerText
		.replace(/\?/g, '🤔')
		.replace(/!/g, '😲');
}
