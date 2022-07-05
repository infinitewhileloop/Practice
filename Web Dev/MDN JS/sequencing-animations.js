// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Sequencing_animations

const aliceTumbling = [
  { transform: 'rotate(0) scale(1)' },
  { transform: 'rotate(360deg) scale(0)' },
];

const aliceTiming = {
  duration: 2000,
  iterations: 1,
  fill: 'forwards',
};

const alice1 = document.querySelector('#alice1');
const alice2 = document.querySelector('#alice2');
const alice3 = document.querySelector('#alice3');

// 1. Promise version of callback hell

// const anim1 = alice1.animate(aliceTumbling, aliceTiming);
// anim1.finished.then(() => {
//   const anim2 = alice2.animate(aliceTumbling, aliceTiming);
//   anim2.finished.then(() => {
//     const anim3 = alice3.animate(aliceTumbling, aliceTiming);
//   });
// });

// alice1.animate(aliceTumbling, aliceTiming).finished.then(() => {
//   alice2.animate(aliceTumbling, aliceTiming).finished.then(() => {
//     alice3.animate(aliceTumbling, aliceTiming);
//   });
// });

// 2. Promise chain

// prettier-ignore
// alice1.animate(aliceTumbling, aliceTiming).finished
// .then(() => alice2.animate(aliceTumbling, aliceTiming).finished)
// .then(() => alice3.animate(aliceTumbling, aliceTiming))

// 3. Async / await

(async function() {

  const anim1 = await animateElem(alice1);
  const anim2 = await animateElem(alice2);
  const anim3 = await animateElem(alice3);
})()

function animateElem(elem) {
  return elem.animate(aliceTumbling, aliceTiming).finished;
}
