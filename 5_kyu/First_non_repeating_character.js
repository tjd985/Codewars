// Write a function named first_non_repeating_letter that takes a string input,
// and returns the first character that is not repeated anywhere in the string.

// For example,
// if given the input 'stress', the function should return 't',
// since the letter t only occurs once in the string, and occurs first in the string.
// As an added challenge, upper - and lowercase letters are considered the same character,
// but the function should return the correct case for the initial letter.

// For example,
// the input 'sTreSS' should return 'T'.
// If a string contains all repeating characters, it should return an empty string ("") or None -- see sample tests.

function firstNonRepeatingLetter(s) {
  const obj = {};
  const result = [];

  for (const value of s) {
    if (obj[value.toUpperCase(0)] || obj[value.toLowerCase(0)]) {
      if (obj[value.toLowerCase(0)]) {
        obj[value.toLowerCase(0)] += 1;
        continue;
      }
      obj[value.toUpperCase(0)] += 1;
      continue;
    }
    obj[value] = (obj[value] || 0) + 1;
  }

  for (let key in obj) {
    if (obj[key] === 1 && result.length === 0) {
      result.push(key);
    }
  }

  return result.length === 0 ? "" : result[0];
}
