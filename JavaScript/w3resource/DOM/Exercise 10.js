let button = document.getElementById('submit');
button.addEventListener('click', calculateSphereVolume);

function calculateSphereVolume() {

	event.preventDefault();

	let radiusInput = document.getElementById('radius');
	let radius = parseInt(radiusInput.value, 10);

	if (isNaN(radius)) return false;

	let volume = Math.round(((4 / 3) * Math.PI * Math.pow(radius, 3)) * 100) / 100;

	let volumeOutput = document.getElementById('volume').setAttribute('value', volume);
}
