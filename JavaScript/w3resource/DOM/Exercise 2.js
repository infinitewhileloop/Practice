// https://www.w3resource.com/javascript-exercises/javascript-dom-exercises.php

function getFormvalue() {

  event.preventDefault();

  let fname = document.querySelector('input[name="fname"]').value;
  let lname = document.querySelector('input[name="lname"]').value;

  let para = document.getElementById('result');
  para.textContent = fname + ' ' + lname;
}
