// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// THE MOST ELEGANT WAY
function anagrams(stringA, stringB) {
  return cleanUp(stringA) === cleanUp(stringB);
}

const cleanUp = (phrase) => {
  return phrase.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");
}

module.exports = anagrams;



// THE TEXTBOOK WAY
// function anagrams(stringA, stringB) {
//   const aCharMap = buildCharMap(stringA);
//   const bCharMap = buildCharMap(stringB);
//
//   if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
//     return false;
//   }
//
//   for (let char in aCharMap) {
//     if (aCharMap[char] !== bCharMap[char]) {
//       return false;
//     }
//   }
//   return true;
// }
//
// function buildCharMap(str) {
//   const charMap = {};
//   for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
//     charMap[char] = charMap[char] + 1 || 1;
//   }
//   return charMap;
// }

// // MY WAY
// function anagrams(stringA, stringB) {
//   const cleanA = cleanUp(stringA);
//   const cleanB = cleanUp(stringB);
//   if (cleanA.length !== cleanB.length) {
//     return false;
//   }
//   const aMap = charMapify(cleanA)
//   const bMap = charMapify(cleanB);
//   for (char in aMap) {
//     if (aMap[char] !== bMap[char]) {
//       return false;
//     }
//   }
//   return true;
// }
//
// const cleanUp = (phrase) => {
//   return phrase.replace(/[^\w]/g, "").toLowerCase();
// }
//
// const charMapify = (phrase) => {
//   const charMap = {};
//   for (char of phrase) {
//     charMap[char] = charMap[char] + 1 || 1;
//   }
//   return charMap;
// }
