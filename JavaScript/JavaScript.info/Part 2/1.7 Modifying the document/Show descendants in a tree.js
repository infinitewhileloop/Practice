let uls = document.querySelectorAll('ul');

let lis = document.querySelectorAll('li');

let numberOfDescendants = [...uls].map(ul => ul.querySelectorAll('li').length);
numberOfDescendants.shift();

lis.forEach(li => {
    if (li.firstElementChild != null) {
        li.childNodes[0].textContent += '[' + numberOfDescendants[0] + ']';
        numberOfDescendants.shift();
    }
});
