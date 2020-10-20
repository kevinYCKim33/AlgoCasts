// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const chars = {};
  let maxValue = 0;
  let maxKey;

  for (let char of str) {
    chars[char] = chars[char] + 1 || 1; // NaN + 1 // NaN  |||||| NaN || 1 ==> 1
  };

  for (let char in chars) {
    if (chars[char] >= maxValue) {
      maxValue = chars[char];
      maxKey = char;
    };
  };
  return maxKey;
}

module.exports = maxChar;

// function maxChar(string) {
//   let obj = Object.prototype;
//
//   for (char of string) {
//     if (obj[char] == undefined) {
//       obj[char] = 1;
//     } else {
//       obj[char] += 1;
//     }
//   }
//
//   let kingVal = 0;
//   let kingKey;
//
//   for (key in obj) {
//     if (obj[key] > kingVal) {
//       kingVal = obj[key];
//       kingKey = key;
//     }
//   }
//
//   return kingKey;
// }
