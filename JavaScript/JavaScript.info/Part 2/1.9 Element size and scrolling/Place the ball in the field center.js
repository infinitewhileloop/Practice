let fieldStyle = getComputedStyle(field);

let greenWidth = field.clientWidth;
let greenHeight = field.clientHeight;

let ballWidth = ball.width;
let ballHeight = ball.height;

let centerX = (greenWidth / 2) - (ballWidth / 2);
let centerY = (greenHeight / 2) - (ballHeight / 2);

ball.style.left = centerX + 'px';
ball.style.top = centerY + 'px';
