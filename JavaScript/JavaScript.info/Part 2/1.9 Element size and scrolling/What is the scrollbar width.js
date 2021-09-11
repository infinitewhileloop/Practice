function scrollBarWidth(elem) {

    let elemStyle = getComputedStyle(elem);

    let totalWidth = elem.offsetWidth; // 390
    let clientWidth = elem.clientWidth; // 325, content width plus 2x padding

    let border = parseInt(elemStyle.borderWidth);

    let result = totalWidth - clientWidth - border * 2;
    return result;
}
