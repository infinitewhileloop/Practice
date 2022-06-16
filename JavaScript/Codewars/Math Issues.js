// https://www.codewars.com/kata/5267faf57526ea542e0007fb/train/javascript

Math.round = function (number) {
  const int = parseInt(number);
  return number >= int + 0.5 ? int + 1 : int;
};

Math.ceil = function (number) {
  const int = parseInt(number);
  return number > int ? int + 1 : int;
};

Math.floor = function (number) {
  return parseInt(number);
};
