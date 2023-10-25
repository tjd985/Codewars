// DESCRIPTIONS:
// Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

// Notes:
// Only lower case letters will be used (a-z). No punctuation or digits will be included.
// Performance needs to be considered.

// Examples: 
// scramble('rkqodlw', 'world') ==> True
// scramble('cedewaraaossoqqyt', 'codewars') ==> True
// scramble('katas', 'steak') ==> False

function scramble(str1, str2) {
  const cache = {};
  
  if (str1.length < str2.length) {
    return false;
  }
  
  for (const word of str1) {
    cache[word] = (cache[word] || 0) + 1;
  }
  
  for (const target of str2) {
    if (cache[target] === 0 || !cache[target]) {
      return false;
    }
    
    cache[target] -= 1;
  }
  
  return true;
}