// DESCRIPTION:
// We need to sum big numbers and we require your help.
// Write a function that returns the sum of two numbers.
// The input numbers are strings and the function must return a string.

// Example:
// add("123", "321"); -> "444"
// add("11", "99");   -> "110"

// Notes:
// The input numbers are big.
// The input is a string of only digits
// The numbers are positives


function add(a, b) {
  const longLength = Math.max(a.length, b.length);
  const count = Math.ceil(longLength / 15);
  const sumArr = [];
  let result = "";
  
  for (let i = 0; i < count; i++) {
    let cutA = a;
    let cutB = b;

    if (a.length > 15  || b.length > 15) {
      cutA = Number(a.slice(a.length - 15));
      cutB = Number(b.slice(b.length - 15));
      a = a.slice(0, (a.length - 15));
      b = b.slice(0, (b.length - 15));
    }
    
    sumArr.push(String(Number(cutA) + Number(cutB)));
  }
  
  for (let i = 0; i < sumArr.length; i++) {
    if (sumArr[i].length > 15) {
      if (i === sumArr.length - 1) {
        continue;
      }

      sumArr[i + 1] = String(Number(sumArr[i].slice(0,1)) + Number(sumArr[i + 1]));
      sumArr[i] = sumArr[i].slice(1);
    }
  }
  
  for (let i = sumArr.length - 1; i >= 0; i--) {
    result += sumArr[i];
  }
  
  return result;
}
