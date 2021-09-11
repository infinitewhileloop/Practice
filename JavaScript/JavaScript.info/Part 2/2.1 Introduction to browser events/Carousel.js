let counter = 0;
let imagesToDisplay = 3;

let images = document.querySelectorAll('li img');

function hideAllBut3Images() {

    images.forEach((image, index) => {
        if (index >= counter + imagesToDisplay || index < counter) {
            image.style.display = 'none';
        } else {
            image.style.display = 'block';
        }
    });
}
hideAllBut3Images();

let buttons = document.querySelectorAll('button.arrow');

buttons[0].onclick = () => {
    counter = Math.max(0, counter - imagesToDisplay);
    hideAllBut3Images();
}

buttons[1].onclick = () => {
    counter = Math.min(counter + imagesToDisplay, images.length - imagesToDisplay);
    hideAllBut3Images();
}
