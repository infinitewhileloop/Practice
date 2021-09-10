function asTabs(node) {

    addListOfButtons(node);

    let buttons = document.querySelectorAll('li button');
    buttons.forEach(button => button.addEventListener('click', ev => showHideNodes(ev, node)));
}

function addListOfButtons(node) {

    let children = Array.from(node.children);

    let ul = document.createElement('ul');
    children.forEach((item, index) => {

        if (index !== 0) item.setAttribute('hidden', '');

        let li = document.createElement('li');
        li.innerHTML = `<button>${item.dataset.tabname}</button>`;
        ul.append(li);
    });
    node.prepend(ul);
}

function showHideNodes(ev, node) {

    let children = Array.from(node.children);
    children.shift(); // remove the first item (ul)

    let buttons = document.querySelectorAll('li button');
    buttons.forEach(button => {
        button.style.background = '';
        button.style.color = '';
    })
    let clickedButton = ev.target;
    clickedButton.style.background = 'tomato';
    clickedButton.style.color = 'white';

    let correspondingNode = node.querySelector(`div[data-tabname="${clickedButton.innerText}"]`);
    children.forEach(child => {
        child.setAttribute('hidden', '');
    });
    correspondingNode.removeAttribute('hidden');
}

asTabs(document.querySelector('tab-panel'));
