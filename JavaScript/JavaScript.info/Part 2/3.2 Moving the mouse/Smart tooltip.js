let currentElem = null;
let timeout;
let tooltip;

function addTooltip(elemId, htmlMessage) {

    let elem = document.getElementById(elemId);

    elem.onmouseenter = ev => {

        currentElem = ev.target;

        timeout = setTimeout(() => {
            if (currentElem == ev.target) {

                let div = document.createElement('div');
                div.innerHTML = htmlMessage;
                div.id = 'tooltip';
                document.body.append(div);

                let coords = currentElem.getBoundingClientRect();
                let left = coords.left + 5;
                let top = coords.bottom + 5;
                div.style.left = left + 'px';
                div.style.top = top + 'px';
            }
        }, 1000);
    };

    elem.onmouseleave = ev => {
        currentElem = null;
        clearTimeout(timeout);
        tooltip = document.querySelector('#tooltip');
        if (tooltip) {
            tooltip.remove();
        }
    }
}

addTooltip('elem', 'Tooltip');
addTooltip('para', 'Just a <strong>paragraph</strong>');
