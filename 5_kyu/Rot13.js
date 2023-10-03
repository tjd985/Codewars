// DESCRIPTION:
// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet.
// ROT13 is an example of the Caesar cipher.

// Create a function that takes a string and returns the string ciphered with Rot13.
// If there are numbers or special characters included in the string, they should be returned as they are.
// Only letters from the latin/english alphabet should be shifted,
// like in the original Rot13 "implementation".

function rot13(message) {
  let result = "";

  for (let value of message) {
    let ascii = value.charCodeAt(0);
    const isUpper = ascii > 64 && ascii < 91;
    const isLower = ascii > 96 && ascii < 123;
    const isAlphabet = isUpper || isLower;

    if (!isAlphabet) {
      result += String.fromCharCode(ascii);
      continue;
    }

    if (isUpper) {
      ascii + 13 > 90 ? (ascii -= 13) : (ascii += 13);
    } else {
      ascii + 13 > 122 ? (ascii -= 13) : (ascii += 13);
    }
    result += String.fromCharCode(ascii);
  }
  return result;
}
