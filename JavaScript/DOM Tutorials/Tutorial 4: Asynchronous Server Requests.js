// Exercise: Collaborative Stars

let table = document.getElementById('star_table');
let stars = [...table.getElementsByTagName('img')];
stars.forEach(item => item.addEventListener('click', toggleStar));
              
function toggleStar(ev) {
  
  let newState;
  let num = ev.target.getAttribute('id');

  if (ev.target.getAttribute('src') == 'star_off.gif') {
    newState = 1;
    ev.target.setAttribute('src', 'star_on.gif');
  } else {
    newState = 0;
    ev.target.setAttribute('src', 'star_off.gif');
  }
  
  sendToServer(num, newState);
}

function sendToServer(num, newState) {

  let req = new XMLHttpRequest();
  req.open('GET', '/collab.py?n=' + num + '&s=' + newState);
  req.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        updateStars(this.responseText);
      }
    };
  req.send();
}

function updateStars(str) {

  let arr = [...str];
  
  stars.forEach((item, index) => {
  
    if (arr[index] === '0') {
    	item.setAttribute('src', 'star_off.gif');
    } else {
    	item.setAttribute('src', 'star_on.gif');    
    }
  });
}
