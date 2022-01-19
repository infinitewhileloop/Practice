// https://javascript.info/events-change-input#deposit-calculator

displayCalculations();

const calculatorElem = document.getElementsByName('calculator')[0];
calculatorElem.addEventListener('input', () => {
    displayCalculations();
});

function displayCalculations() {

    const initial = document.getElementsByName('money')[0].value;
    const months = document.getElementsByName('months')[0].value;
    const interest = document.getElementsByName('interest')[0].value;

    const moneyBefore = document.getElementById('money-before');
    moneyBefore.textContent = initial;

    const moneyAfter = document.querySelector('#money-after');
    const result = calculateDeposit(initial, months, interest);
    moneyAfter.textContent = result;

    const heightAfter = document.getElementById('height-after');
    const moneyGrowth = result / initial * 100;
    heightAfter.style.height = moneyGrowth + 'px';
}

function calculateDeposit(initial, months, interest) {
  
    const years = months / 12;
    interest /= 100;
    return Math.round(initial * ((1 + interest) ** years));
}
