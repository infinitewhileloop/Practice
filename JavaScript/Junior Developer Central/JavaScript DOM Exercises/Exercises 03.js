// https://www.youtube.com/watch?v=Ky1rr9hEoLM

// Exercise One

let ul = document.querySelector('#pro-plan div ul');

let li = document.createElement('li');
li.textContent = '24/7 Phone support';
ul.append(li);

// Exercise Two

let basic = document.getElementById('basic-plan');
let pro = document.querySelector('#pro-plan');

basic.parentElement.prepend(basic);


// Exercise Three

let proButton = document.querySelector('#pro-plan button');

proButton.style.background = '#007bff';
proButton.style.color = '#fff';
proButton.innerText = 'Buy Now';


// Exercise Four

let proStorage = document.querySelector('#pro-plan span[class="storage-amount"]');
let basicStorage = document.querySelector('#basic-plan span[class="storage-amount"]');

proStorage.textContent = Number(proStorage.textContent) * 1.25;
basicStorage.textContent = Number(basicStorage.textContent) * 1.5;


// Exercise Five

let radioDiv = document.createElement('div');

let radioMonthly = document.createElement('input');
radioMonthly.setAttribute('type', 'radio');
radioMonthly.setAttribute('id', 'monthly');
radioMonthly.setAttribute('name', 'paymentSchedule');
radioMonthly.setAttribute('value', 'monthly');
radioMonthly.setAttribute('checked', '');

let labelMonthly = document.createElement('label');
labelMonthly.setAttribute('for', 'monthly');
labelMonthly.textContent = 'Monthly: ';

let radioYearly = document.createElement('input');
radioYearly.setAttribute('type', 'radio');
radioYearly.setAttribute('id', 'yearly');
radioYearly.setAttribute('name', 'paymentSchedule');
radioYearly.setAttribute('value', 'yearly');

let labelYearly = document.createElement('label');
labelYearly.setAttribute('for','yearly');
labelYearly.textContent = 'Yearly: ';

radioDiv.append(labelMonthly, radioMonthly, labelYearly, radioYearly);

document.body.prepend(radioDiv);

let isYearlyChecked = radioYearly.checked;

let pricingEls = document.querySelectorAll('.pricing');

let radioButtons = document.querySelectorAll('input[type="radio"]');
radioButtons.forEach(item => item.addEventListener('change', editPrices));

function editPrices() {

	if (radioYearly.checked) {

		pricingEls.forEach(item => {

			item.textContent = (Number(item.textContent.split('/')[0]) * 10) + ' / year';
		})
	
	} else {

		pricingEls.forEach(item => {

			item.textContent = (Number(item.textContent.split('/')[0]) / 10) + ' / month';
		})
	}
}
