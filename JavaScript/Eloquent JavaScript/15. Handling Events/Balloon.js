//<p id="balloon" style="font-size: 40px; text-align: center;">🎈</p>

let balloon = document.getElementById('balloon');

let keyEvent = window.addEventListener('keydown', changeBalloonSize);

function changeBalloonSize(ev) {

    let fontSizeBefore = parseFloat(balloon.style.fontSize);

    if (ev.key === 'ArrowUp') {
        ev.preventDefault();
        balloon.style.fontSize = fontSizeBefore * 1.1 + 'px';

    } else if (ev.key === 'ArrowDown') {
        ev.preventDefault();
        balloon.style.fontSize = fontSizeBefore * 0.9 + 'px';
    }    

    let fontSizeAfter = parseFloat(balloon.style.fontSize);

    if (fontSizeAfter > 150) {
        window.removeEventListener('keydown', changeBalloonSize);
        balloon.textContent = '💥';
        balloon.style.fontSize = '200px';
    }
}
