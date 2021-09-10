ul.addEventListener('mousedown', ev => ev.preventDefault());

ul.addEventListener('click', ev => {

    if (ev.target.tagName === 'LI' && !ev.shiftKey) {
        ul.querySelectorAll('li.selected').forEach(li => {
            li.classList.remove('selected');
        });
        ev.target.classList.add('selected');

    } else if (ev.target.tagName === 'LI' && ev.shiftKey) {
        ev.target.classList.toggle('selected');
    }
});
