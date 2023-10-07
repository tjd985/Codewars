// DESCRIPTION:
// Given the string representations of two integers, return the string representation of the sum of those integers.

// For example:
// sumStrings('1','2') // => '3'
// A string representation of an integer will contain no characters besides the ten numerals "0" to "9".
// I have removed the use of BigInteger and BigDecimal in java
// Python: your solution need to work with huge numbers (about a milion digits), converting to int will not work.

function sumStrings(a, b) {
  const moreLonger = Math.max(a.length, b.length);
  for (let i = 0; i < moreLonger; i++) {
    if (a[i] === undefined) a = "0" + a;
    if (b[i] === undefined) b = "0" + b;
  }
  let result = "";
  b = b.split("");

  for (let i = moreLonger - 1; i >= 0; i--) {
    const oneSum = +a[i] + +b[i];

    if (oneSum >= 10 && i !== 0) {
      b[i - 1] = +b[i - 1] + 1;
      result = String(oneSum).slice(1) + result;
      continue;
    }

    result = String(oneSum) + result;
  }
  const firstNotZero = result
    .split("")
    .findIndex((value) => Number(value) !== 0);
  for (let i = 0; i < firstNotZero; i++) {
    if (result[i] === "0") {
      result = result.replace(result[i], "");
    }
  }
  return result;
}
