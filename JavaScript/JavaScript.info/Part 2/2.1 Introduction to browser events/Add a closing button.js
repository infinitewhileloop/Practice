let panes = document.querySelectorAll('.pane');

panes.forEach(pane => {

    pane.style.position = 'relative'

    let button = document.createElement('button');
    button.classList.add('remove-button');
    button.textContent = '[x]';
    button.style.position = 'absolute';
    button.style.right = '10px';
    button.style.top = '.3em';
    pane.append(button);

    button.onclick = function () {
        this.parentElement.style.display = 'none';
    }
});
