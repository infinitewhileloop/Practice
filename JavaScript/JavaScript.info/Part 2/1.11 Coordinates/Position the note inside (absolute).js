function positionAt(anchor, position, elem) {

    let anchorCoords = anchor.getBoundingClientRect();
    let anchorTopLeftX = anchorCoords.left;
    let anchorTopLeftY = anchorCoords.top;
    let anchorBottomRightX = anchorCoords.right;
    let anchorBottomRightY = anchorCoords.bottom;

    let elemWidth = elem.clientWidth;
    let elemHeight = elem.clientHeight;

    elem.style.position = 'absolute';

    if (position === 'top-out') {

        elem.style.left = anchorTopLeftX + 'px';
        elem.style.top = anchorTopLeftY - elemHeight + 'px';

    } else if (position === 'right-out') {

        elem.style.left = anchorBottomRightX + 'px';
        elem.style.top = anchorTopLeftY + 'px';

    } else if (position === 'bottom-out') {

        elem.style.left = anchorTopLeftX + 'px';
        elem.style.top = anchorBottomRightY + 'px';

    } else if (position === 'top-in') {

        elem.style.left = anchorTopLeftX + 'px';
        elem.style.top = anchorTopLeftY + 'px';

    } else if (position === 'right-in') {

        elem.style.left = anchorBottomRightX - elemWidth + 'px';
        elem.style.top = anchorTopLeftY + 'px';

    } else if (position === 'bottom-in') {

        elem.style.left = anchorTopLeftX + 'px';
        elem.style.top = anchorBottomRightY - elemHeight + 'px';
    }
}
