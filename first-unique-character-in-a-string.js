/**
 * @param {string} s
 * @return {number}
 */
//find the index at which the first non-repeating letter is in a string
//all chars will be lowercase
//if all characters have at least 1 other matching character, return -1
//leetcode = 0 (because l is the first non-repeating )
//olivia = 0 (o)
//llama = 3 (m)
//put it into a set? {0: l, 1: a, 2: m}
//freq counter? {l:2, a:2, m:1}
//        i
//  l l a m a
//  i
// aaaa
// {a:4}
//loop through str and look that up in freq counter, if 1, return idx
//if we get through end of str, return -1 (means that all chars have at least one match)

var firstUniqChar = function(s) {
  //freq counter with str
  const charCounter = freqCounter(s);
  //loop through str:
  for (let i = 0; i < s.length; i++){
      if (charCounter[s[i]] === 1) return i;
  }
  //if we get to end of str without returning 1, return -1 (no unique char found)
  return -1;
};


const freqCounter = (str) => {
  const charCountObj = {};
  for (let char of str) {
      //set up the value, if in obj already, grab that value, otherwise set to zero
      let charCount = charCountObj[char] || 0;
      charCountObj[char] = charCount += 1;
  }
  return charCountObj;
}