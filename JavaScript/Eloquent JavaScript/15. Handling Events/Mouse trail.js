window.addEventListener('mousemove', ev => {

    let div = document.createElement('div');
    div.className = 'dot';
    div.style.left = ev.pageX - 4 + 'px';
    div.style.top = ev.pageY - 4 + 'px';
    document.body.appendChild(div);
    setTimeout(() => div.remove(), 200);
});
