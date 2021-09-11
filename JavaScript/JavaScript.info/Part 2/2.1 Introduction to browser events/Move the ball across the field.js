field.style.cursor = 'pointer';

let ballWidth = ball.clientWidth;
let halfBallWidth = ballWidth / 2;
let ballHeight = ball.clientHeight;
let halfBallHeight = ballHeight / 2;
ball.style.position = 'absolute';
ball.style.transition = '1s all';

let borderTop = parseInt(getComputedStyle(field).borderTopWidth);
let borderRight = parseInt(getComputedStyle(field).borderRightWidth);
let borderBottom = parseInt(getComputedStyle(field).borderBottomWidth);
let borderLeft = parseInt(getComputedStyle(field).borderLeftWidth);

let fieldCoords = field.getBoundingClientRect();
let fieldTopLeftX = fieldCoords.left;
let fieldTopLeftY = fieldCoords.top;
let fieldBottomRightX = fieldCoords.right;
let fieldBottomRightY = fieldCoords.bottom;

field.addEventListener('click', moveBall);

function moveBall(ev) {

    let positionX = ev.clientX;
    let positionY = ev.clientY;

    if (positionX < fieldTopLeftX + borderLeft + halfBallWidth) {
        ball.style.left = fieldTopLeftX + borderLeft + 'px';

    } else if (positionX > fieldBottomRightX - borderRight - halfBallWidth) {
        ball.style.left = fieldBottomRightX - borderRight - ballWidth + 'px';

    } else {
        ball.style.left = positionX - halfBallWidth + 'px';
    }

    if (positionY < fieldTopLeftY + borderTop + halfBallHeight) {
        ball.style.top = fieldTopLeftY + borderTop + 'px';

    } else if (positionY > fieldBottomRightY - borderBottom - halfBallHeight) {
        ball.style.top = fieldBottomRightY - borderBottom - ballHeight + 'px';

    } else {
        ball.style.top = positionY - halfBallHeight + 'px';
    }
}
