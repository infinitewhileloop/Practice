// https://www.youtube.com/watch?v=kLX3t1aV1As


// Exercise One

let jobDiv = document.querySelector('.job-card');

for (let i = 0; i < 3; i++) {

	let clone = jobDiv.cloneNode(true);
	jobDiv.insertAdjacentElement('afterEnd', clone);
}


// Exercise Two

let jobTitles = ['', 'JavaScript Developer', 'Java Developer', 'Python Developer'];

let jobDivs = document.querySelectorAll('.job-card');

jobDivs.forEach((jobDiv, index) => {
	if (index !== 0) {
		jobDiv.querySelector('h3').textContent = jobTitles[index];
	}
});


// Exercise Three

let numberOfJobsListed = document.querySelectorAll('.job-card').length;

document.querySelector('#jobs-listed span').textContent = numberOfJobsListed;


// Exercise Four

let searchBox = document.getElementById('search');

searchBox.addEventListener('keyup', showHideJobs);

function showHideJobs(ev) {

	jobDivs = document.querySelectorAll('.job-card');

	jobDivs.forEach(jobDiv => {

		let jobTitle = jobDiv.querySelector('h3').textContent.toLowerCase();

		let regex = new RegExp(ev.target.value, 'i');

		let match = regex.test(jobTitle);

		if (!match) {
			jobDiv.setAttribute('hidden', '');
		
		} else {
			jobDiv.removeAttribute('hidden');
		}
	});
}


// Exercise Five

document.getElementById('show-all').addEventListener('click', function () {

		document.querySelectorAll('.job-card').forEach(jobDiv => {
			jobDiv.removeAttribute('hidden');
		});

		document.getElementById('search').value = '';
});
