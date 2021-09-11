function positionAt(anchor, position, elem) {

    if (position !== 'top' && position !== 'right' && position !== 'bottom') return;

    let anchorCoords = anchor.getBoundingClientRect();
    let anchorTopLeftX = anchorCoords.left;
    let anchorTopLeftY = anchorCoords.top;
    let anchorBottomRightX = anchorCoords.right;
    let anchorBottomRightY = anchorCoords.bottom;

    let elemCoords = elem.getBoundingClientRect();
    let elemWidth = elemCoords.width;
    let elemHeight = elemCoords.height;

    if (position === 'top') {

        elem.style.left = anchorTopLeftX + 'px';
        elem.style.top = anchorTopLeftY - elemHeight + 'px';

    } else if (position === 'right') {

        elem.style.left = anchorBottomRightX + 'px';
        elem.style.top = anchorTopLeftY + 'px';

    } else if (position === 'bottom') {

        elem.style.left = anchorTopLeftX + 'px';
        elem.style.top = anchorBottomRightY + 'px';
    }
}
