// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// do a for of loop around the string...
// have a vowelcounter;
// everytime the iterator runs into a, e, i, o, u...
//  just have the counter go up...
//  return the counter;

// using regex the safer bet is iterative
function vowels(str) {
  const matches = str.match(/[aeiou]/gi); //returns null if you don't find anything...
  // g: don't stop creating arrays after finding first vowel, just keep finding things.
  // i: make my search case insensitive
  // [aeiou]: if anything if your string matches a or e or i or o or u...
  return matches ? matches.length : 0;
}


module.exports = vowels;

// NO REGEX
// function vowels(str) {
//   let count = 0;
//   const checker = ['a', 'e', 'i', 'o', 'u'];
//   for (let char of str.toLowerCase()) {
//     if (checker.includes(char)) {
//       count++;
//     };
//   };
//   return count;
// }
