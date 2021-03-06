// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// MINE
const capitalize = (sentence) => {
  const cappedWords = sentence.split(" ").map(word => {
    return word[0].toUpperCase() + word.slice(1);
  });
  return cappedWords.join(" ");
};


module.exports = capitalize;

// MINE
// const capitalize = (sentence) => {
//   const cappedWords = sentence.split(" ").map(word => {
//     return word[0].toUpperCase() + word.slice(1);
//   });
//   return cappedWords.join(" ");
// };

// MINE 1 YR LATER
// function capitalize(str) {
//   const strArr = str.split(" ");
//   return strArr.map(function(word) {
//     let firstLetter = word[0];
//     let restOfWord = word.slice(1);
//     return (firstLetter.toUpperCase() + restOfWord);
//   }).join(" ");
// }

//STEPHEN I
// function capitalize(str) {
//   const words = [];
//
//   for (let word of str.split(' ')) {
//     words.push(word[0].toUpperCase() + word.slice(1));
//   }
//
//   return words.join(' ');
// }

//STEPHEN II VERBOSE FEELS MORE LIKE C
// const capitalize = (str) => {
//   let result = str[0].toUpperCase();
//
//   for (i = 1; i < str.length; i++) {
//     if (str[i - 1] === " ") {
//       result += str[i].toUpperCase();
//     } else {
//       result += str[i];
//     }
//   }
//
//   return result;
// }
