// https://dom-tutorials.appspot.com/static/3.html


// Lesson 4: Event object

let table = document.getElementById('star_table');
table.addEventListener('mouseover', function(ev) {
    if (ev.target.tagName == 'IMG') {
        ev.target.src = 'star_on.gif';  
    }
});


// Lesson 5: preventDefault

let inputField = document.getElementById('phone');
inputField.addEventListener('keypress', ev => {

    if (ev.charCode < 48 || ev.charCode > 57) {
        ev.preventDefault();
    }
});


// Exercise: Context Menu

let menu = document.getElementById('menu');

let img = document.getElementById('tux');
img.addEventListener('contextmenu', ev => {
    ev.preventDefault();
    menu.style.display = 'block';
    menu.style.position = 'absolute';
    menu.style.left = `${ev.pageX}px`;
    menu.style.top = `${ev.pageY}px`;
});

document.body.addEventListener('click', ev => {
    menu.style.display = 'none';
});

let options = document.querySelectorAll('div[id^="option"]');
options.forEach(item => {
    item.addEventListener('click', ev => {
        ev.target.style.background = 'tomato';
    })
});
