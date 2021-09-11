let fieldCoords = field.getBoundingClientRect();

let fieldStyle = getComputedStyle(field);
let fieldBorderTopWidth = parseInt(fieldStyle.borderTopWidth);
let fieldBorderLeftWidth = parseInt(fieldStyle.borderLeftWidth);
let fieldBorderBottomWidth = parseInt(fieldStyle.borderRightWidth);
let fieldBorderRightWidth = parseInt(fieldStyle.borderBottomWidth);

let flag1 = [fieldCoords.left, fieldCoords.top];
let flag2 = [fieldCoords.right, fieldCoords.bottom];
let flag3 = [fieldCoords.left + fieldBorderLeftWidth, fieldCoords.top + fieldBorderTopWidth];
let flag4 = [fieldCoords.right - fieldBorderRightWidth, fieldCoords.bottom - fieldBorderBottomWidth];
