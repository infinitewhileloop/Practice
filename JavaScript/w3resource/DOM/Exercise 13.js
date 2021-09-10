window.onresize = logWindowSize;

function logWindowSize() {

	console.log(`Window height: ${window.innerHeight}`,
		`Window width: ${window.innerWidth}`);
}
