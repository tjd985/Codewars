// [DESCRIPTIONS]
// Complete the solution so that it takes the object(JavaScript / CoffeeScript) or hash(ruby) passed in and generates a human readable string
// from its key / value pairs.
// The format should be "KEY = VALUE". Each key/value pair should be separated by a comma except for the last pair.

// [Example]
// solution({a: 1, b: '2'}) // "a = 1,b = 2"

function solution(pairs) {
  let result = "";
  const keyArr = Object.keys(pairs);
  const valueArr = Object.values(pairs);

  for (let i = 0; i < keyArr.length; i++) {
    result += `${keyArr[i]} = ${valueArr[i]},`;
  }
  return result.slice(0, result.length - 1);
}
