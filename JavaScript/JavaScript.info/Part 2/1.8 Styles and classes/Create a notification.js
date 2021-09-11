let div = document.createElement('div');
document.body.appendChild(div);
div.classList.add('notification');

function showNotification({ top = 0, right = 0, className, html }) {

    div.style.position = 'absolute';
    div.style.top = parseInt(top) + 'px';
    div.style.right = parseInt(right) + 'px';

    div.innerHTML = html;

    div.classList.add(className);
}

let i = 1;
setInterval(() => {
    showNotification({
        top: 10,
        right: 10,
        html: 'Hello ' + i++,
        className: "welcome"
    });
}, 2000);
