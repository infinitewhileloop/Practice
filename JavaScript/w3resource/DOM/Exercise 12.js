function highlight() {
 	
 	let strongEls = document.querySelectorAll('strong');

 	strongEls.forEach(item => item.style.background = 'gold');
 } 

function return_normal() {

 	let strongEls = document.querySelectorAll('strong');

 	strongEls.forEach(item => item.style.background = '');
} 
