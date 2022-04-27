'use strict';
const log = console.log;

let runningTotal = 0;

function longDelay(input) {
  if (arguments.length) {
    runningTotal += input;
    return longDelay;
  }
  return runningTotal;
}

module.exports = longDelay;
