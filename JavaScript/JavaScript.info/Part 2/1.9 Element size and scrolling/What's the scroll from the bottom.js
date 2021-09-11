function scrollBottom(elem) {

    let totalHeight = elem.scrollHeight;
    let visibleHeight = elem.clientHeight; 
    let top = elem.scrollTop;

    let result = totalHeight - visibleHeight - top;
    return result;
}
