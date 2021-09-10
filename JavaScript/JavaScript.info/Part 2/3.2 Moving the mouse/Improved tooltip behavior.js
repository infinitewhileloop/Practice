let currentElem = null;

house.onmouseover = function (ev) {

    let target = ev.target;
    let parent = target.parentElement;
    let targetMessage = target.dataset.tooltip;
    let parentMessage = parent.dataset.tooltip;

    if (targetMessage) {
        currentElem = target;
        showTooltip(targetMessage, target)

    } else if (parentMessage) {

        currentElem = parent;
        showTooltip(parentMessage, parent)
    }
};

house.onmouseout = function(ev) {

    let tooltip = document.getElementById('tooltip');
    
    if (tooltip) {
        tooltip.remove();
    }
}

function showTooltip(message, elem) {

    let div = document.createElement('div');
    div.id = 'tooltip';
    div.textContent = message;
    div.className = 'tooltip';
    document.body.append(div);

    let houseWidth = house.offsetWidth;
    let divWidth = div.offsetWidth;
    let divHeight = div.offsetHeight;

    let left = (houseWidth / 2) - (divWidth / 2);
    div.style.left = left + 'px';

    let elemCoords = elem.getBoundingClientRect();
    let elemTopLeftY = elemCoords.top;
    let elemBottomRightY = elemCoords.bottom;
    let windowHeight = document.documentElement.clientHeight;
    let currentScroll = window.pageYOffset;
    let top;
    if (currentScroll - windowHeight < divHeight) {
        top = elemTopLeftY - divHeight - 5;
    } else {
        top = elemBottomRightY + 5;
    }
    div.style.top = top + 'px';
}
