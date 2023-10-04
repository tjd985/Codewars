// DESCRIPTION:
// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!

// Here's the deal:
// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.

// Examples:
// " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
// "    Hello     World   "                  =>  "#HelloWorld"
// ""                                        =>  false

function generateHashtag(str) {
  let result = "#";
  str = str.trim();

  if (str.length === 0) {
    return false;
  }

  const strArr = str.split(" ");
  for (let i = 0; i < strArr.length; i++) {
    const ascii = strArr[i].charCodeAt(0);

    const isUpper = ascii > 64 && ascii < 91;
    const isLower = ascii > 96 && ascii < 123;
    const isAlphabet = isUpper || isLower;

    if (!isAlphabet) {
      strArr.splice(i, 1);
      i -= 1;
      continue;
    }
    result += strArr[i][0].toUpperCase() + strArr[i].slice(1);
  }

  return result.length > 140 ? false : result;
}
