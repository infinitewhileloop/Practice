// https://www.youtube.com/watch?v=qQy5K-pE8Fo

// Exercise One

function addLabels() {

	let inputs = document.getElementsByTagName('input');

	log(inputs)

	for (let item of inputs) {

		let label = document.createElement('label');
		label.textContent = item.id + ': ';
		label.setAttribute('for', item.id);
		item.insertAdjacentElement('beforeBegin', label)
	};

// Exercise Two
  
function makeRequired() {

	let inputs = document.getElementsByTagName('input');

	for (let item of inputs) {

		item.setAttribute('required', '');
	}
}

function checkInput(ev) {

	const errorEls = Array.from(ev.target.parentNode.querySelectorAll('span'));

	if (ev.target.value === '' && !errorEls.length) {

		event.target.insertAdjacentHTML('afterEnd', '<span>Error</span>');
	}


	if (ev.target.value !== '' && errorEls) {
		errorEls.forEach(item => item.remove());
	}
}

  
// Exercise Three

function matchPasswords(ev) {

	ev.preventDefault();

	if (password.value !== confirmPassword.value) {

		password.insertAdjacentHTML('afterEnd', '<span>Passwords don\'t match!</span>');
	}
}

  
// Exercise Four

let username = document.getElementById('username');
let password = document.getElementById('password');
let confirmPassword = document.getElementById('confirmPassword');
let button = document.querySelector('button');

button.setAttribute('disabled', '');

let inputs = [username, password, confirmPassword];

inputs.forEach(item => {
	item.addEventListener('blur', enableButton);
});

function enableButton(ev) {

	if (username.value !== '' &&
			password.value !== '' &&
			confirmPassword.value !== '') {

		button.removeAttribute('disabled');
	}
}


// Exercise Five

button.addEventListener('click', succesfulRegistration);

function succesfulRegistration(ev) {

	ev.preventDefault();

	let span = document.createElement('span');
	span.textContent = 'Succesful Registration!';

	form.prepend(span);
}
