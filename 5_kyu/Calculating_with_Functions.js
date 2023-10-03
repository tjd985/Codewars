// DESCRIPTION:
// This time we want to write calculations using functions and get the results.Let's have a look at some examples:

// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3

function zero(func) {
  return func ? func(0) : 0;
}
function one(func) {
  return func ? func(1) : 1;
}
function two(func) {
  return func ? func(2) : 2;
}
function three(func) {
  return func ? func(3) : 3;
}
function four(func) {
  return func ? func(4) : 4;
}
function five(func) {
  return func ? func(5) : 5;
}
function six(func) {
  return func ? func(6) : 6;
}
function seven(func) {
  return func ? func(7) : 7;
}
function eight(func) {
  return func ? func(8) : 8;
}
function nine(func) {
  return func ? func(9) : 9;
}

function plus(value2) {
  return function (value1) {
    return value1 + value2;
  };
}
function minus(value2) {
  return function (value1) {
    return value1 - value2;
  };
}
function times(value2) {
  return function (value1) {
    return value1 * value2;
  };
}
function dividedBy(value2) {
  return function (value1) {
    return Math.floor(value1 / value2);
  };
}
