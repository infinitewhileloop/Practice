container.addEventListener('click', ev => {

    if (ev.target.tagName !== 'BUTTON') return;

    let div = ev.target.closest('div.pane');

    div.remove();
});
