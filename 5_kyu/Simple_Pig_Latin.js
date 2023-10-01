// [DESCRIPTIONS]
// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// [Examples]
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

function pigIt(str) {
  const strArr = str.split(" ");
  let result = "";

  for (let value of strArr) {
    const asciiCode = value.charCodeAt(0);
    const isLowerCase = asciiCode >= 97 && asciiCode <= 122;
    const isUpperCase = asciiCode >= 65 && asciiCode <= 90;
    const isEnglish = isLowerCase || isUpperCase;

    if (!isEnglish) {
      result += `${value} `;
      continue;
    }
    const arr = value.split("");
    arr.push(arr.shift());
    result += `${arr.join("")}ay `;
  }
  return result.slice(0, result.length - 1);
}
