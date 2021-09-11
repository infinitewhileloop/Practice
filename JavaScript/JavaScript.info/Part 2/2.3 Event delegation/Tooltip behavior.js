let tooltip;

document.addEventListener('mouseover', addTooltip);
document.addEventListener('mouseout', removeTooltip);

function addTooltip(ev) {

    if (ev.target.dataset.tooltip == undefined) return;

    tooltip = document.createElement('div');
    tooltip.innerHTML = ev.target.dataset.tooltip;
    tooltip.className = 'tooltip';
    document.body.appendChild(tooltip);

    tooltipHeight = tooltip.offsetHeight;
    tooltipWidth = tooltip.offsetWidth;

    let button = ev.target;
    let buttonWidth = button.offsetWidth;
    let buttonHeight = button.offsetHeight;
    let buttonTopLeftX = button.offsetLeft;
    let buttonTopLeftY = button.offsetTop;

    tooltip.style.left = Math.max(0, (buttonTopLeftX + (buttonWidth / 2)) - (tooltipWidth / 2)) + 'px';
    let currentScroll = window.pageYOffset;

    if (buttonTopLeftY - currentScroll < tooltipHeight) {
        tooltip.style.top = buttonTopLeftY + buttonHeight - currentScroll + 5 + 'px';
    } else {
        tooltip.style.top = buttonTopLeftY - 5 - tooltipHeight + 'px';
    }
}

function removeTooltip(ev) {

    if (ev.target.dataset.tooltip == undefined) return;

    tooltip.remove();
}
